import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './components/about.component';
import { EducationComponent } from './components/education.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, AboutComponent, EducationComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  // nav tracker for slider positioning and dimensions
  @ViewChild('navTrack') private navTrack?: ElementRef<HTMLDivElement>;

  readonly navItems: NavItem[] = [
    { id: 'about', label: 'About', icon: 'pi pi-user' },
    { id: 'education', label: 'Education', icon: 'pi pi-graduation-cap' },
    { id: 'experience', label: 'Experience', icon: 'pi pi-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'pi pi-folder-open' }
  ];

  // set to the first item on init, but start as empty to ensure slider initialises correctly
  activeSectionId = this.navItems[0]?.id ?? '';
  sliderWidth = '0px';
  sliderTransform = 'translateX(0px)';
  sliderVisible = false;

  // if multiple scroll events happen, only process the latest animation frame
  private isScrollSyncQueued = false;

  // setup skipping intermediate scroll positions during smooth scroll triggered by nav clicks
  private navScrollLockId: string | null = null;
  private navScrollLockTimeoutId: number | null = null;

  ngAfterViewInit(): void {
    // start with no active section to ensure slider starts hidden, then sync to the correct section after view init
    this.activeSectionId = '';
    this.syncActiveSectionFromScroll();
    this.ensureInitialSliderVisible();

    // mobile browsers can finish font/layout work after initial paint
    const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
    if (fonts?.ready) {
      void fonts.ready.then(() => this.ensureInitialSliderVisible());
    }
  }

  // when window is loaded, ensure slider is correctly positioned in case fonts or other resources caused layout shifts after initial paint. 
  @HostListener('window:load')
  onWindowLoad(): void {
    this.ensureInitialSliderVisible();
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

  // if window is resized, correct slider position and dimensions as well as active section
  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateSliderPosition();
    this.syncActiveSectionFromScroll();
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
    // move slider immediately to clicked item
    this.startNavScrollLock(id);
    this.setActiveSection(id);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  /**
   * Handles the navigation scroll lock when a nav item has been clicked and we're waiting to reach the target section or timeout.
   * 
   * Used to temporarily lock scroll syncing to the active section when a nav item is clicked, until the target section is reached or a timeout occurs. This prevents the active section from changing during the smooth scroll animation triggered by a nav click, which could cause the slider to jump around if multiple sections are passed during the scroll.
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
      this.clearNavScrollLock();
      this.syncActiveSectionFromScroll();
    }

    return true;
  }

  /**
   * Syncs the active section based on the current scroll position.
   * 
   * Used to update the active section and slider position as the user scrolls through the page. Finds the last section whose top is above the bottom of the nav (with a small buffer) and sets that as the active section. This ensures that as you scroll down, the active section updates when you pass each section, and as you scroll up, it updates when you go back above each section.
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
   * Sets the active section by ID and updates the slider position.
   * @param id ID of the section to set as active
   */
  private setActiveSection(id: string): void {
    if (!id || this.activeSectionId === id) {
      return;
    }

    this.activeSectionId = id;
    this.updateSliderPosition();
  }

  /**
   * Updates navbar slider position and dimensions based on the currently active section and corresponding nav button.
   */
  private updateSliderPosition(): void {
    // if no nav track or active section, hide slider
    const track = this.navTrack?.nativeElement;
    if (!track || !this.activeSectionId) {
      return;
    }

    // get the active nav button corresponding to the active section
    const activeButton = track.querySelector<HTMLButtonElement>(
      `.nav-button[data-section-id="${this.activeSectionId}"]`
    );

    // if no active button found, hide slider
    if (!activeButton) {
      this.sliderVisible = false;
      return;
    }

    // calculate slider position and dimensions based on active button and nav track
    const trackRect = track.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    if (trackRect.width === 0 || buttonRect.width === 0) {
      this.sliderVisible = false;
      return;
    }

    // move slider to active button position and set width to match button
    this.sliderWidth = `${buttonRect.width}px`;
    this.sliderTransform = `translateX(${buttonRect.left - trackRect.left}px)`;
    this.sliderVisible = true;
  }

  /**
   * Ensures the slider is visible and correctly positioned after initial load, accounting for any late layout shifts due to fonts or other resources loading after initial paint.
   * 
   * Used to handle cases where the slider might initially render with incorrect position or dimensions due to fonts or other resources causing layout shifts after the initial view is rendered. It checks if the slider is visible and correctly positioned, and if not, it retries after a short delay, up to a maximum number of attempts to avoid infinite loops.
   * @param attempt Number of attempts made to ensure slider visibility, used to limit retries and prevent infinite loops. Defaults to 0 on initial call.
   */
  private ensureInitialSliderVisible(attempt = 0): void {
    this.syncActiveSectionFromScroll();
    this.updateSliderPosition();
    if (this.sliderVisible || attempt >= 120) {
      return;
    }

    window.setTimeout(() => this.ensureInitialSliderVisible(attempt + 1), 50);
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
      this.clearNavScrollLock();
      this.syncActiveSectionFromScroll();
    }, 1200);
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
}
