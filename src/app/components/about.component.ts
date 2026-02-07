import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section id="about" class="w-full min-h-[100dvh] py-14 bg-blue-200">
      <div class="mx-auto max-w-6xl px-6">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-user !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">About</h2>
        </div>
        <p class="mt-5 max-w-3xl leading-7 text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non rhoncus augue, et fermentum velit. Phasellus non facilisis odio. In ex sem, eleifend at fringilla a, dignissim sit amet dui. Pellentesque at orci non tortor tempor eleifend. In egestas sed turpis ut suscipit. Nulla non laoreet elit, mattis laoreet erat. Nunc suscipit accumsan vehicula. Integer sit amet congue urna, suscipit cursus quam. Etiam et rutrum lorem. Aliquam felis mi, posuere eu tellus id, commodo consectetur diam. Etiam rutrum, lacus eget varius condimentum, risus urna rhoncus orci, a ornare mauris elit ac enim.
        </p>
        <div class="flex flex-wrap gap-x-3 gap-y-2 mt-4">
          <a class="!bg-blue-600 !border-blue-600 !text-white hover:!bg-blue-500 !px-4" icon="pi pi-linkedin" href="https://www.linkedin.com/in/gregory-sedykh" pButton target="_blank" rel="noopener noreferrer">
            <span pButtonLabel>LinkedIn</span>
          </a>
          <a class="!bg-stone-950 !border-stone-950 !text-white hover:!bg-stone-800 !px-4" icon="pi pi-github" href="https://github.com/gregorysedykh" pButton target="_blank" rel="noopener noreferrer">
            <span pButtonLabel>GitHub</span>
          </a>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent {}
