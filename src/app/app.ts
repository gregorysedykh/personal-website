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
    requestAnimationFrame(() => this.updateSliderPosition());
    window.setTimeout(() => this.updateSliderPosition(), 60);
  }

  @HostListener('window:load')
  onWindowLoad(): void {
    this.updateSliderPosition();
  }

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

  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const navHeight = this.getNavHeight();
    const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navHeight);
    // move slider immediately to clicked item
    this.startNavScrollLock(id);
    this.setActiveSection(id);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  private handleNavScrollLock(): boolean {
    if (!this.navScrollLockId) {
      return false;
    }

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

  private setActiveSection(id: string): void {
    if (!id || this.activeSectionId === id) {
      return;
    }

    this.activeSectionId = id;
    this.updateSliderPosition();
  }

  private updateSliderPosition(): void {
    const track = this.navTrack?.nativeElement;
    if (!track || !this.activeSectionId) {
      return;
    }

    const activeButton = track.querySelector<HTMLButtonElement>(
      `.nav-button[data-section-id="${this.activeSectionId}"]`
    );

    if (!activeButton) {
      this.sliderVisible = false;
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();
    if (trackRect.width === 0 || buttonRect.width === 0) {
      this.sliderVisible = false;
      return;
    }

    this.sliderWidth = `${buttonRect.width}px`;
    this.sliderTransform = `translateX(${buttonRect.left - trackRect.left}px)`;
    this.sliderVisible = true;
  }

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

  private clearNavScrollLock(): void {
    this.navScrollLockId = null;
    if (this.navScrollLockTimeoutId !== null) {
      window.clearTimeout(this.navScrollLockTimeoutId);
      this.navScrollLockTimeoutId = null;
    }
  }

  private getNavHeight(): number {
    const nav = document.querySelector('.top-nav');
    return nav instanceof HTMLElement ? nav.offsetHeight : 68;
  }
}
