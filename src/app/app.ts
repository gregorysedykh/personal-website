import { Component } from '@angular/core';
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
export class App {
  readonly navItems: NavItem[] = [
    { id: 'about', label: 'About', icon: 'pi pi-user' },
    { id: 'education', label: 'Education', icon: 'pi pi-graduation-cap' },
    { id: 'experience', label: 'Experience', icon: 'pi pi-briefcase' },
    { id: 'projects', label: 'Projects', icon: 'pi pi-folder-open' }
  ];

  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const navHeight = this.getNavHeight();
    const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - navHeight - 12);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  private getNavHeight(): number {
    const nav = document.querySelector('.top-nav');
    return nav instanceof HTMLElement ? nav.offsetHeight : 68;
  }
}
