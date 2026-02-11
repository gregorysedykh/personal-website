import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './components/about.component';
import { EducationComponent } from './components/education.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';

interface NavItem {
  id: string;
  labelKey: string;
  icon: string;
}

interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  flag: string;
  ariaLabelKey: string;
}

type LanguageCode = 'en' | 'fr' | 'de';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, TranslocoPipe, AboutComponent, EducationComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private readonly translocoService = inject(TranslocoService);
  private readonly supportedLanguages: LanguageCode[] = ['en', 'fr', 'de'];
  @ViewChild('languageMenu') private languageMenu?: ElementRef<HTMLDivElement>;

  readonly navItems: NavItem[] = [
    { id: 'about', labelKey: 'nav.about', icon: 'pi pi-user' },
    { id: 'education', labelKey: 'nav.education', icon: 'pi pi-graduation-cap' },
    { id: 'experience', labelKey: 'nav.experience', icon: 'pi pi-briefcase' },
    { id: 'projects', labelKey: 'nav.projects', icon: 'pi pi-folder-open' }
  ];
  readonly languageOptions: LanguageOption[] = [
    { code: 'en', shortLabel: 'EN', flag: '🇬🇧', ariaLabelKey: 'language.switchToEnglish' },
    { code: 'fr', shortLabel: 'FR', flag: '🇫🇷', ariaLabelKey: 'language.switchToFrench' },
    { code: 'de', shortLabel: 'DE', flag: '🇩🇪', ariaLabelKey: 'language.switchToGerman' }
  ];

  activeSectionId = '';
  activeLanguage: LanguageCode = this.resolveInitialLanguage();
  isLanguageMenuOpen = false;

  // if multiple scroll events happen, only process the latest animation frame
  private isScrollSyncQueued = false;

  // setup skipping intermediate scroll positions during smooth scroll triggered by nav clicks
  private navScrollLockId: string | null = null;
  private navScrollLockTimeoutId: number | null = null;

  constructor() {
    this.translocoService.setActiveLang(this.activeLanguage);
  }

  ngAfterViewInit(): void {
    this.syncActiveSectionFromScroll();
  }

  // on scroll, update active section based on scroll position, but only process latest scroll event per animation frame for performance
  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.isScrollSyncQueued) {
      return;
    }

    this.isScrollSyncQueued = true;
    requestAnimationFrame(() => {
      this.isScrollSyncQueued = false;

      // skip syncing to scroll position if we're currently locked to a nav item from a recent click, until we reach the target section
      if (this.handleNavScrollLock()) {
        return;
      }
      this.syncActiveSectionFromScroll();
    });
  }

  // if window is resized, recompute active section based on current scroll position
  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncActiveSectionFromScroll();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isLanguageMenuOpen) {
      return;
    }

    const menu = this.languageMenu?.nativeElement;
    const target = event.target;
    if (!menu || !(target instanceof Node) || menu.contains(target)) {
      return;
    }

    this.isLanguageMenuOpen = false;
  }

  /**
   * Scrolls smoothly to a given section by ID
   * @param id ID of the section to scroll to
   */
  scrollToSection(id: string): void {
    // if no section with the given ID exists, do nothing
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    // get the distance from the top of the viewport to the section, plus the current scroll position, minus the nav height to account for sticky nav covering content.
    // ensure not negative to avoid issues with scrollTo.
    const navHeight = this.getNavHeight();
    const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navHeight);
    // set active section immediately for responsive visual feedback
    this.startNavScrollLock(id);
    this.setActiveSection(id);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  setLanguage(language: LanguageCode): void {
    this.isLanguageMenuOpen = false;
    if (this.activeLanguage === language) {
      return;
    }

    this.activeLanguage = language;
    this.translocoService.setActiveLang(language);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', language);
    }
  }

  toggleLanguageMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  selectLanguageFromMenu(language: LanguageCode, event: MouseEvent): void {
    event.stopPropagation();
    this.setLanguage(language);
  }

  get activeLanguageOption(): LanguageOption {
    return (
      this.languageOptions.find((option) => option.code === this.activeLanguage) ??
      this.languageOptions[0]
    );
  }

  /**
   * Handles the navigation scroll lock when a nav item has been clicked and we're waiting to reach the target section or timeout.
   * 
   * Used to temporarily lock scroll syncing to the active section when a nav item is clicked, until the target section is reached or a timeout occurs. This prevents the active section from changing during smooth scrolling when multiple sections are passed.
   * @returns true if the nav scroll lock is active and we're still waiting to reach the target section, false otherwise
   */
  private handleNavScrollLock(): boolean {
    // if no active nav scroll lock, nothing to do
    if (!this.navScrollLockId) {
      return false;
    }

    // if the target section for the active nav scroll lock doesn't exist, clear the lock and allow normal scroll syncing to resume
    const section = document.getElementById(this.navScrollLockId);
    if (!section) {
      this.clearNavScrollLock();
      return false;
    }

    this.setActiveSection(this.navScrollLockId);
    // if within 2px of the target section, consider scroll reached and clear lock
    const isAtTarget = Math.abs(section.getBoundingClientRect().top - this.getNavHeight()) <= 2;
    if (isAtTarget) {
      this.releaseNavScrollLockAndSync();
    }

    return true;
  }

  /**
   * Syncs the active section based on the current scroll position.
   * 
   * Used to update the active section as the user scrolls through the page. Finds the last section whose top is above the bottom of the nav (with a small buffer) and sets that as the active section.
   */
  private syncActiveSectionFromScroll(): void {
    // get current section in view by finding last section whose top is above the nav + 8px buffer
    const threshold = this.getNavHeight() + 8;
    let currentId = this.navItems[0]?.id ?? '';

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section && section.getBoundingClientRect().top <= threshold) {
        currentId = item.id;
      }
    }

    this.setActiveSection(currentId);
  }

  /**
   * Sets the active section by ID.
   * @param id ID of the section to set as active
   */
  private setActiveSection(id: string): void {
    if (!id || this.activeSectionId === id) {
      return;
    }

    this.activeSectionId = id;
  }

  /**
   * Starts the navigation scroll lock for a given section ID.
   * 
   * Used to temporarily lock scroll syncing to the active section when a nav item is clicked, until the target section is reached or a timeout occurs. 
   * 
   * @param id The ID of the section to lock the navigation scroll to.
   */
  private startNavScrollLock(id: string): void {
    this.navScrollLockId = id;
    if (this.navScrollLockTimeoutId !== null) {
      window.clearTimeout(this.navScrollLockTimeoutId);
    }

    this.navScrollLockTimeoutId = window.setTimeout(() => {
      this.releaseNavScrollLockAndSync();
    }, 1200);
  }

  /**
   * Releases the navigation scroll lock and syncs the active section to the current scroll position.
   */
  private releaseNavScrollLockAndSync(): void {
    this.clearNavScrollLock();
    this.syncActiveSectionFromScroll();
  }

  /**
   * Clears the navigation scroll lock.
   * 
   * Used to allow scroll syncing to resume after a nav click, either when the target section is reached or after a timeout to prevent indefinite lock in case of interrupted scroll or other edge cases.
   */
  private clearNavScrollLock(): void {
    this.navScrollLockId = null;
    if (this.navScrollLockTimeoutId !== null) {
      window.clearTimeout(this.navScrollLockTimeoutId);
      this.navScrollLockTimeoutId = null;
    }
  }

  /**
   * Gets the height of the navigation bar.
   * 
   * Used to calculate scroll positions and offsets. 
   * If no navigation element is found, returns a default height of 68px.
   * 
   * @returns {number} The height of the navigation bar in pixels
   */
  private getNavHeight(): number {
    const nav = document.querySelector('.top-nav');
    return nav instanceof HTMLElement ? nav.offsetHeight : 68;
  }

  private resolveInitialLanguage(): LanguageCode {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('lang');
      if (stored && this.isSupportedLanguage(stored)) {
        return stored;
      }
    }

    if (typeof navigator !== 'undefined') {
      const browserLanguage = navigator.language.split('-')[0]?.toLowerCase();
      if (browserLanguage && this.isSupportedLanguage(browserLanguage)) {
        return browserLanguage;
      }
    }

    return 'en';
  }

  private isSupportedLanguage(language: string): language is LanguageCode {
    return this.supportedLanguages.includes(language as LanguageCode);
  }
}
