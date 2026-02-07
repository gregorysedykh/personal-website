import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CardModule, ButtonModule],
  template: `
    <section id="projects" class="w-full min-h-[100dvh] py-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-folder-open !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">Projects</h2>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-6 mt-6">
          <p-card class="rounded-xl bg-slate-50 shadow-none">
            <ng-template #content>
              <h3 class="text-lg font-semibold text-slate-900">Project 1</h3>
              <p class="mt-1 text-slate-700">
                Aenean congue urna et placerat tristique. Fusce a felis orci. Nulla quis luctus nunc. In ac ligula eget erat
                laoreet ultricies. Aliquam volutpat leo et erat tincidunt, id vestibulum odio porttitor. Vivamus imperdiet turpis
                eget eros aliquam volutpat. Suspendisse molestie sit amet lorem eu tempus. Integer at sagittis urna, vel ultricies
                libero. Fusce iaculis sodales eros vel bibendum. Nullam facilisis erat felis, id imperdiet ipsum tempus non.
              </p>
            </ng-template>
            <ng-template #footer>
              <a class="!bg-stone-950 !border-stone-950 !text-white hover:!bg-stone-800 !px-4" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
                <span pButtonLabel>GitHub</span>
              </a>
            </ng-template>
          </p-card>

          <p-card class="rounded-xl bg-slate-50 shadow-none">
            <ng-template #content>
              <h3 class="text-lg font-semibold text-slate-900">Project 2</h3>
              <p class="mt-1 text-slate-700">
                Aenean congue urna et placerat tristique. Fusce a felis orci. Nulla quis luctus nunc. In ac ligula eget erat
                laoreet ultricies. Aliquam volutpat leo et erat tincidunt, id vestibulum odio porttitor. Vivamus imperdiet turpis
                eget eros aliquam volutpat. Suspendisse molestie sit amet lorem eu tempus. Integer at sagittis urna, vel ultricies
                libero. Fusce iaculis sodales eros vel bibendum. Nullam facilisis erat felis, id imperdiet ipsum tempus non.
              </p>
            </ng-template>
            <ng-template #footer>
              <a class="!bg-stone-950 !border-stone-950 !text-white hover:!bg-stone-800 !px-4" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
                <span pButtonLabel>GitHub</span>
              </a>
            </ng-template>
          </p-card>

          <p-card class="rounded-xl bg-slate-50 shadow-none">
            <ng-template #content>
              <h3 class="text-lg font-semibold text-slate-900">Project 3</h3>
              <p class="mt-1 text-slate-700">
                Aenean congue urna et placerat tristique. Fusce a felis orci. Nulla quis luctus nunc. In ac ligula eget erat
                laoreet ultricies. Aliquam volutpat leo et erat tincidunt, id vestibulum odio porttitor. Vivamus imperdiet turpis
                eget eros aliquam volutpat. Suspendisse molestie sit amet lorem eu tempus. Integer at sagittis urna, vel ultricies
                libero. Fusce iaculis sodales eros vel bibendum. Nullam facilisis erat felis, id imperdiet ipsum tempus non.
              </p>
            </ng-template>
            <ng-template #footer>
              <a class="!bg-stone-950 !border-stone-950 !text-white hover:!bg-stone-800 !px-4" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
                <span pButtonLabel>GitHub</span>
              </a>
            </ng-template>
          </p-card>

          <p-card class="rounded-xl bg-slate-50 shadow-none">
            <ng-template #content>
              <h3 class="text-lg font-semibold text-slate-900">Project 4</h3>
              <p class="mt-1 text-slate-700">
                Aenean congue urna et placerat tristique. Fusce a felis orci. Nulla quis luctus nunc. In ac ligula eget erat
                laoreet ultricies. Aliquam volutpat leo et erat tincidunt, id vestibulum odio porttitor. Vivamus imperdiet turpis
                eget eros aliquam volutpat. Suspendisse molestie sit amet lorem eu tempus. Integer at sagittis urna, vel ultricies
                libero. Fusce iaculis sodales eros vel bibendum. Nullam facilisis erat felis, id imperdiet ipsum tempus non.
              </p>
            </ng-template>
            <ng-template #footer>
              <a class="!bg-stone-950 !border-stone-950 !text-white hover:!bg-stone-800 !px-4" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
                <span pButtonLabel>GitHub</span>
              </a>
            </ng-template>
          </p-card>

        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}
