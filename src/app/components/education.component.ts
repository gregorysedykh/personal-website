import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CardModule, ButtonModule],
  template: `
    <section id="education" class="page-section">
      <div class="section-container">
        <div class="section-heading">
          <i class="pi pi-graduation-cap section-heading-icon"></i>
          <h2 class="section-heading-title">Education</h2>
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
                  <h3 class="text-xl font-semibold text-slate-900">Master of Science in Computer Science</h3>
                  <p class="mt-1 text-blue-600">University of Geneva</p>
                  <p class="mt-1 location-row">
                    <i class="pi pi-map-marker location-icon"></i>
                    <span>Geneva, Switzerland</span>
                  </p>
                  <p class="mt-3 italic text-slate-700">Current average grade: 5.58/6</p>
                </div>

                <ul class="list-blue space-y-2">
                  <li>Relevant coursework:</li>
                </ul>

                <div class="highlight-box">
                  <p class="font-bold">Master's thesis</p>
                  <p class="mt-1 italic">Detecting Misconfigurations in CVM Deployments</p>
                  <p class="mt-2 text-slate-700">
                    Currently developing a Python-based static analysis tool to detect security misconfigurations in Terraform configurations for Confidential Virtual Machine (CVM) cloud deployments.
                  </p>
                  <div class="mt-3">
                    <a
                      class="btn-solid btn-solid-dark"
                      icon="pi pi-github"
                      href="https://github.com/gregorysedykh"
                      pButton
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span pButtonLabel>GitHub</span>
                    </a>
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
                  <h3 class="text-xl font-semibold text-slate-900">Bachelor of Science in Computer Science</h3>
                  <p class="mt-1 text-blue-600">University of Geneva</p>
                  <p class="mt-1 location-row">
                    <i class="pi pi-map-marker location-icon"></i>
                    <span>Geneva, Switzerland</span>
                  </p>
                  <p class="mt-3 italic text-slate-700">Grade: 5.36/6</p>
                </div>

                <ul class="list-blue space-y-2">
                  <li>Relevant coursework: <i>Software Engineering, Objected Oriented Programming, Databases</i></li>
                </ul>

                <div class="highlight-box">
                  <p class="font-bold">Bachelor's thesis</p>
                  <p class="mt-1 italic">Diffusion Models in Depth: From a Theoretical and a Practical Perspective</p>
                  <p class="mt-2 text-slate-700">
                    Authored a mathematical framework for generative AI and implemented a functional diffusion model using PyTorch.
                  </p>
                  <div class="mt-3">
                    <a
                      class="btn-solid btn-solid-dark"
                      icon="pi pi-github"
                      href="https://github.com/gregorysedykh/diffusion-models-in-depth"
                      pButton
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span pButtonLabel>GitHub</span>
                    </a>
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
