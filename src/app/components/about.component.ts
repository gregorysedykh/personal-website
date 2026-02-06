import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="about" class="w-full min-h-[calc(100dvh-4.5rem)] py-14">
      <div class="mx-auto max-w-6xl px-4 sm:px-3">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-user !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">About</h2>
        </div>
        <p class="mt-5 max-w-3xl leading-7 text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non rhoncus augue, et fermentum velit. Phasellus non facilisis odio. In ex sem, eleifend at fringilla a, dignissim sit amet dui. Pellentesque at orci non tortor tempor eleifend. In egestas sed turpis ut suscipit. Nulla non laoreet elit, mattis laoreet erat. Nunc suscipit accumsan vehicula. Integer sit amet congue urna, suscipit cursus quam. Etiam et rutrum lorem. Aliquam felis mi, posuere eu tellus id, commodo consectetur diam. Etiam rutrum, lacus eget varius condimentum, risus urna rhoncus orci, a ornare mauris elit ac enim.
        </p>
      </div>
    </section>
  `
})
export class AboutComponent {}
