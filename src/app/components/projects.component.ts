import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  template: `
    <section id="projects" class="w-full min-h-[calc(100dvh-4.5rem)] py-14">
      <div class="mx-auto max-w-6xl px-4 sm:px-3">
        <div class="mt-3 flex items-center gap-4">
          <i class="pi pi-folder-open !text-[2.25rem] leading-none shrink-0"></i>
          <h2 class="m-0 text-3xl font-semibold text-slate-900 sm:text-4xl">Projects</h2>
        </div>

        <div class="mt-6 space-y-5">
          <article class="rounded-xl bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Project 1</h3>
            <p class="mt-1 text-slate-700">Aenean congue urna et placerat tristique. Fusce a felis orci. Nulla quis luctus nunc. In ac ligula eget erat laoreet ultricies. Aliquam volutpat leo et erat tincidunt, id vestibulum odio porttitor. Vivamus imperdiet turpis eget eros aliquam volutpat. Suspendisse molestie sit amet lorem eu tempus. Integer at sagittis urna, vel ultricies libero. Fusce iaculis sodales eros vel bibendum. Nullam facilisis erat felis, id imperdiet ipsum tempus non. Etiam purus metus, vulputate sit amet bibendum at, faucibus ac est. Integer sollicitudin, leo eget posuere dictum, ipsum orci pharetra ipsum, ut euismod risus felis ac libero. Nullam at feugiat eros, sed efficitur leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </article>
          <article class="rounded-xl bg-slate-50 p-5">
            <h3 class="text-lg font-semibold text-slate-900">Project 2</h3>
            <p class="mt-1 text-slate-700">Curabitur eu faucibus sapien. Quisque vel lorem mauris. Donec lectus metus, posuere eget sollicitudin porta, feugiat ac turpis. Nunc eu nulla eu nibh interdum efficitur id vitae leo. Vivamus consectetur id nisl at vulputate. Duis id lorem dui. Aenean laoreet commodo suscipit. Suspendisse potenti. Maecenas sagittis mi in erat venenatis venenatis. Ut ut pulvinar lacus. Pellentesque condimentum gravida nisi eget suscipit. Etiam augue libero, euismod ut aliquet laoreet, ornare nec felis. Fusce imperdiet, sapien eget scelerisque pulvinar, elit urna imperdiet est, ac malesuada ex ligula quis sem.</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {}
