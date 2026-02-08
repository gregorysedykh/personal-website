import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CardModule, ButtonModule, TranslocoPipe],
  template: `
    <section id="education" class="page-section">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-graduation-cap section-heading-icon"></i>
          <h2 class="section-heading-title">{{ 'education.title' | transloco }}</h2>
        </div>

        <div class="timeline-grid">
          <span aria-hidden="true" class="timeline-line timeline-line-muted row-span-2"></span>

          <p class="timeline-date row-start-1">
            <span class="sm:hidden leading-tight">
              <span class="block">2024</span>
              <span class="block">-</span>
              <span class="block">2026</span>
            </span>
            <span class="hidden sm:inline">2024 - 2026</span>
          </p>
          <span aria-hidden="true" class="timeline-marker row-start-1"></span>
          <p-card class="surface-card row-start-1 col-start-3">
            <ng-template #content>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-semibold text-slate-900">{{ 'education.msc.title' | transloco }}</h3>
                  <p class="mt-1 text-blue-600">{{ 'education.university' | transloco }}</p>
                  <p class="mt-1 location-row">
                    <i class="pi pi-map-marker location-icon"></i>
                    <span>{{ 'education.location' | transloco }}</span>
                  </p>
                  <p class="mt-3 italic text-slate-700">{{ 'education.msc.grade' | transloco }}</p>
                </div>

                <div class="highlight-box">
                  <p class="font-bold">{{ 'education.msc.thesis.label' | transloco }}</p>
                  <p class="mt-1 italic">{{ 'education.msc.thesis.title' | transloco }}</p>
                  <p class="mt-2 text-slate-700">
                    {{ 'education.msc.thesis.description' | transloco }}
                  </p>
                  <div class="mt-3">
                    <a
                      class="btn-solid btn-solid-dark"
                      icon="pi pi-github"
                      [label]="'common.github' | transloco"
                      href="https://github.com/gregorysedykh"
                      pButton
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>
              </div>
            </ng-template>
          </p-card>

          <p class="timeline-date row-start-2">
            <span class="sm:hidden leading-tight">
              <span class="block">2021</span>
              <span class="block">-</span>
              <span class="block">2024</span>
            </span>
            <span class="hidden sm:inline">2021 - 2024</span>
          </p>
          <span aria-hidden="true" class="timeline-marker row-start-2"></span>
          <p-card class="surface-card row-start-2 col-start-3">
            <ng-template #content>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xl font-semibold text-slate-900">{{ 'education.bsc.title' | transloco }}</h3>
                  <p class="mt-1 text-blue-600">{{ 'education.university' | transloco }}</p>
                  <p class="mt-1 location-row">
                    <i class="pi pi-map-marker location-icon"></i>
                    <span>{{ 'education.location' | transloco }}</span>
                  </p>
                  <p class="mt-3 italic text-slate-700">{{ 'education.bsc.grade' | transloco }}</p>
                </div>

                <ul class="list-blue space-y-2">
                  <li>{{ 'education.bsc.coursework' | transloco }}</li>
                </ul>

                <div class="highlight-box">
                  <p class="font-bold">{{ 'education.bsc.thesis.label' | transloco }}</p>
                  <p class="mt-1 italic">{{ 'education.bsc.thesis.title' | transloco }}</p>
                  <p class="mt-2 text-slate-700">
                    {{ 'education.bsc.thesis.description' | transloco }}
                  </p>
                  <div class="mt-3">
                    <a
                      class="btn-solid btn-solid-dark"
                      icon="pi pi-github"
                      [label]="'common.github' | transloco"
                      href="https://github.com/gregorysedykh/diffusion-models-in-depth"
                      pButton
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>
              </div>
            </ng-template>
          </p-card>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {}
