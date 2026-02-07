import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CardModule, ButtonModule],
  template: `
    <section id="projects" class="page-section">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-folder-open section-heading-icon"></i>
          <h2 class="section-heading-title">Projects</h2>
        </div>

        <div class="mt-6 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          <p-card class="project-card-shell">
            <ng-template #content>
              <div class="flex h-full flex-col">
                <h3 class="text-lg font-semibold text-slate-900">Nexus</h3>
                <p class="mt-3 italic text-slate-700">Personal project - in progress</p>
                <p class="mt-1 text-slate-700">
                  Building a scalable SPA using a .NET 10 Web API, EF and Angular with PostgreSQL for relational data and Docker for consistent, containerised deployment. Configured a GitHub Actions CI/CD pipeline.
                </p>
                <div class="mt-auto pt-4">
                  <a class="btn-solid btn-solid-dark self-start" icon="pi pi-github" href="https://github.com/gregorysedykh/Nexus" pButton target="_blank" rel="noopener noreferrer">
                    <span pButtonLabel>GitHub</span>
                  </a>
                </div>
              </div>
            </ng-template>
          </p-card>

          <p-card class="project-card-shell">
            <ng-template #content>
              <div class="flex h-full flex-col">
                <h3 class="text-lg font-semibold text-slate-900">Web Application Firewall</h3>
                <p class="mt-3 italic text-slate-700">Project for Advanced Security course</p>
                <p class="mt-1 text-slate-700">
                  Deployed a Django app via Docker behind an Nginx reverse proxy integrated with ModSecurity and OWASP Core Rule Set.
                </p>
                <div class="mt-auto pt-4">
                  <a class="btn-solid btn-solid-dark self-start" icon="pi pi-github" href="https://github.com/gregorysedykh/web-application-firewall" pButton target="_blank" rel="noopener noreferrer">
                    <span pButtonLabel>GitHub</span>
                  </a>
                </div>
              </div>
            </ng-template>
          </p-card>

        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}
