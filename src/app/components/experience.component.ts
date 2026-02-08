import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CardModule, TranslocoPipe],
  template: `
    <section id="experience" class="page-section page-section-contrast">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-briefcase section-heading-icon"></i>
          <h2 class="section-heading-title">{{ 'experience.title' | transloco }}</h2>
        </div>

        <div class="timeline-grid">
          <span aria-hidden="true" class="timeline-line timeline-line-strong"></span>

          <p class="timeline-date row-start-1">{{ 'experience.internship.date' | transloco }}</p>
          <span aria-hidden="true" class="timeline-marker row-start-1"></span>
          <p-card class="surface-card row-start-1 col-start-3">
            <ng-template #content>
              <h3 class="text-xl font-semibold text-slate-900">{{ 'experience.internship.role' | transloco }}</h3>
              <p class="mt-1 text-blue-600">{{ 'experience.internship.company' | transloco }}</p>
              <p class="mt-1 location-row">
                <i class="pi pi-map-marker location-icon"></i>
                <span>{{ 'experience.internship.location' | transloco }}</span>
              </p>
              <p class="mt-4 italic text-slate-700">{{ 'experience.internship.summary' | transloco }}</p>
              <ul class="list-blue mt-4 space-y-2">
                <li>{{ 'experience.internship.bullet1' | transloco }}</li>
                <li>{{ 'experience.internship.bullet2' | transloco }}</li>
                <li>{{ 'experience.internship.bullet3' | transloco }}</li>
              </ul>
            </ng-template>
          </p-card>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}
