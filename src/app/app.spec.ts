import { TestBed } from '@angular/core/testing';
import { translocoConfig, TranslocoTestingModule } from '@jsverse/transloco';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        TranslocoTestingModule.forRoot({
          langs: {
            en: {
              nav: {
                brand: 'Gregory Sedykh'
              }
            }
          },
          translocoConfig: translocoConfig({
            availableLangs: ['en'],
            defaultLang: 'en',
            reRenderOnLangChange: true
          })
        })
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render header name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.textContent).toContain('Gregory Sedykh');
  });
});
