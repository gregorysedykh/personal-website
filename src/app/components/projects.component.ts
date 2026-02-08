import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CardModule, ButtonModule, TranslocoPipe],
  template: `
    <section id="projects" class="page-section">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-folder-open section-heading-icon"></i>
          <h2 class="section-heading-title">{{ 'projects.title' | transloco }}</h2>
        </div>

        <div class="mt-6 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          <p-card class="project-card-shell">
            <ng-template #content>
              <div class="flex h-full flex-col">
                <h3 class="text-lg font-semibold text-slate-900">{{ 'projects.nexus.title' | transloco }}</h3>
                <p class="mt-3 italic text-slate-700">{{ 'projects.nexus.subtitle' | transloco }}</p>
                <p class="mt-1 text-slate-700">
                  {{ 'projects.nexus.description' | transloco }}
                </p>
                <div class="mt-auto pt-4">
                  <a class="btn-solid btn-solid-dark self-start" icon="pi pi-github" [label]="'common.github' | transloco" href="https://github.com/gregorysedykh/Nexus" pButton target="_blank" rel="noopener noreferrer"></a>
                </div>
              </div>
            </ng-template>
          </p-card>

          <p-card class="project-card-shell">
            <ng-template #content>
              <div class="flex h-full flex-col">
                <h3 class="text-lg font-semibold text-slate-900">{{ 'projects.waf.title' | transloco }}</h3>
                <p class="mt-3 italic text-slate-700">{{ 'projects.waf.subtitle' | transloco }}</p>
                <p class="mt-1 text-slate-700">
                  {{ 'projects.waf.description' | transloco }}
                </p>
                <div class="mt-auto pt-4">
                  <a class="btn-solid btn-solid-dark self-start" icon="pi pi-github" [label]="'common.github' | transloco" href="https://github.com/gregorysedykh/web-application-firewall" pButton target="_blank" rel="noopener noreferrer"></a>
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
