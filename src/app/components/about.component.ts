import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ButtonModule, CardModule],
  template: `
    <section id="about" class="page-section page-section-contrast">
      <div class="section-container">
        <div class="space-y-4">
          <p-card class="surface-card-featured">
            <ng-template #content>
              <div class="grid gap-6 p-5 sm:p-7 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Hi, I'm Gregory!</h2>
                  <p class="mt-4 max-w-3xl leading-7 text-slate-700">
                    Text here
                  </p>
                  <p class="mt-4 location-row">
                    <i class="pi pi-map-marker location-icon"></i>
                    <span>Geneva, Switzerland</span>
                  </p>
                  <div class="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    <a class="btn-solid btn-solid-primary" icon="pi pi-linkedin" href="https://www.linkedin.com/in/gregory-sedykh" pButton target="_blank" rel="noopener noreferrer">
                      <span pButtonLabel>LinkedIn</span>
                    </a>
                    <a class="btn-solid btn-solid-dark" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
                      <span pButtonLabel>GitHub</span>
                    </a>
                  </div>
                </div>

                <div class="mx-auto flex w-full justify-center lg:justify-end">
                  <div class="h-60 w-60 overflow-hidden rounded-full border-4 border-blue-200 bg-white shadow-[0_10px_25px_-12px_rgba(30,64,175,0.55)] sm:h-48 sm:w-48">
                    <img
                      src="https://placehold.co/600x600/e2e8f0/334155"
                      alt="Profile placeholder"
                      class="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ng-template>
          </p-card>

          <div class="grid gap-4 md:grid-cols-2">
            <p-card class="h-full surface-card-soft">
              <ng-template #content>
                <div class="p-5 sm:p-6">
                  <h3 class="text-lg font-semibold text-slate-900">Technical Skills</h3>
                  <div class="mt-3 space-y-4">
                    <div>
                      <p class="text-sm font-semibold text-slate-700">Programming Languages</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="tag-pill">C#</span>
                        <span class="tag-pill">Python</span>
                        <span class="tag-pill">TypeScript</span>
                        <span class="tag-pill">JavaScript</span>
                        <span class="tag-pill">Java</span>
                        <span class="tag-pill">SQL</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-sm font-semibold text-slate-700">Frameworks</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="tag-pill">.NET</span>
                        <span class="tag-pill">Angular</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-sm font-semibold text-slate-700">Databases</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="tag-pill">PostgreSQL</span>
                        <span class="tag-pill">MySQL</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-sm font-semibold text-slate-700">DevOps & Tools</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="tag-pill">Docker</span>
                        <span class="tag-pill">Git</span>
                        <span class="tag-pill">GitHub</span>
                        <span class="tag-pill">GitLab</span>
                        <span class="tag-pill">GitHub Actions</span>
                      </div>
                    </div>

                    <div>
                      <p class="text-sm font-semibold text-slate-700">AI Tools</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span class="tag-pill">Codex</span>
                        <span class="tag-pill">GitHub Copilot</span>
                        <span class="tag-pill">Claude Code</span>
                        <span class="tag-pill">MCP (Model Context Protocol)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ng-template>
            </p-card>

            <p-card class="h-full surface-card-soft">
              <ng-template #content>
                <div class="h-full p-5 sm:p-6 flex flex-col">
                  <h3 class="text-lg font-semibold text-slate-900">Languages</h3>
                  <p class="mt-1 text-sm text-slate-500">Overall proficiency (CEFR)</p>
                  <ul class="mt-4 flex-1 flex flex-col justify-between gap-3">
                    <li class="language-item">
                      <span class="language-label">
                        <i class="pi pi-globe location-icon"></i>
                        <span>English</span>
                      </span>
                      <span class="language-level">C2</span>
                    </li>
                    <li class="language-item">
                      <span class="language-label">
                        <i class="pi pi-globe location-icon"></i>
                        <span>French</span>
                      </span>
                      <span class="language-level">C2</span>
                    </li>
                    <li class="language-item">
                      <span class="language-label">
                        <i class="pi pi-globe location-icon"></i>
                        <span>Russian</span>
                      </span>
                      <span class="language-level">C2</span>
                    </li>
                    <li class="language-item">
                      <span class="language-label">
                        <i class="pi pi-globe location-icon"></i>
                        <span>German</span>
                      </span>
                      <span class="language-level">B2</span>
                    </li>
                    <li class="language-item">
                      <span class="language-label">
                        <i class="pi pi-globe location-icon"></i>
                        <span>Ukrainian</span>
                      </span>
                      <span class="language-level">B2</span>
                    </li>
                  </ul>
                </div>
              </ng-template>
            </p-card>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
