import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  standalone: true,
  template: `
    <section id="education" class="w-full min-h-[calc(100dvh-4.5rem)] py-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-graduation-cap !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">Education</h2>
        </div>

        <div class="mt-6 space-y-5">
          <article class="rounded-xl bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Master of Science in Computer Science</h3>
            <p class="mt-1 text-slate-700">University Name - 2024 - 2026</p>
            <p class="mt-2 text-slate-700">Pellentesque malesuada elit fringilla justo laoreet cursus. Proin sollicitudin lacus at ultrices ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eleifend in ante mollis malesuada. In id dictum augue. Aenean lacinia fermentum lacus, vitae lobortis turpis porttitor sit amet. Pellentesque et elit ac justo blandit efficitur at nec ante. Morbi molestie pretium nunc auctor ultrices. Aliquam nec nunc nisi. Duis non massa finibus, malesuada nulla sed, commodo ante. Nunc ornare venenatis efficitur. Fusce interdum enim ante, sit amet bibendum nisl tristique in.</p>
          </article>

          <article class="rounded-xl bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Bachelor of Science in Computer Science</h3>
            <p class="mt-1 text-slate-700">University Name - 2021 - 2024</p>
            <p class="mt-2 text-slate-700">Vivamus laoreet purus dignissim sagittis volutpat. Morbi eu metus lorem. Aliquam in iaculis turpis. Sed egestas neque massa, molestie ultrices felis lacinia quis. Mauris tempor urna quis magna placerat lacinia. Aliquam ut nisi et purus blandit maximus non in ex. Nam euismod massa ut bibendum ultricies. Phasellus luctus in dolor luctus hendrerit. Sed vestibulum sem sed ligula imperdiet finibus.</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {}
