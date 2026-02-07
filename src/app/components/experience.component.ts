import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CardModule],
  template: `
    <section id="experience" class="page-section page-section-contrast">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-briefcase section-heading-icon"></i>
          <h2 class="section-heading-title">Experience</h2>
        </div>

        <div class="timeline-grid">
          <span aria-hidden="true" class="timeline-line timeline-line-strong"></span>

          <p class="timeline-date row-start-1">June 2019</p>
          <span aria-hidden="true" class="timeline-marker row-start-1"></span>
          <p-card class="surface-card row-start-1 col-start-3">
            <ng-template #content>
              <h3 class="text-xl font-semibold text-slate-900">Internship</h3>
              <p class="mt-1 text-blue-600">BNP Paribas CIB</p>
              <p class="mt-1 location-row">
                <i class="pi pi-map-marker location-icon"></i>
                <span>Paris, France</span>
              </p>
              <p class="mt-4 italic text-slate-700">2 week internship in the IT department</p>
              <ul class="list-blue mt-4 space-y-2">
                <li>Introduction to software development and to a banking IT environment as a high school student</li>
                <li>Basic GUI development in JS</li>
                <li>Simple database management in SQL</li>
              </ul>
            </ng-template>
          </p-card>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}
