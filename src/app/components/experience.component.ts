import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  template: `
    <section id="experience" class="w-full min-h-[calc(100dvh-4.5rem)] py-14">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-briefcase !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">Experience</h2>
        </div>

        <div class="mt-6 space-y-5">
          <article class="rounded-xl bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Internship</h3>
            <p class="mt-1 text-slate-700">Company</p>
            <p class="mt-2 text-slate-700">Cras euismod lorem vitae tempus aliquet. Fusce fermentum vestibulum auctor. Donec id posuere quam. Nunc luctus sollicitudin tempor. Fusce consectetur mauris ac mauris lobortis, vitae porta sem congue. Aliquam erat volutpat. Maecenas nulla tellus, egestas sit amet sem sit amet, vestibulum cursus orci. Ut gravida, tellus sit amet porttitor cursus, quam metus suscipit lacus, id rutrum tortor nunc at purus. Donec suscipit mollis quam, in vestibulum erat ultrices ut. Quisque eget commodo libero. Morbi leo dui, congue et purus eget, molestie consectetur purus. Nam accumsan nisl vel nulla gravida ultricies.</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}
