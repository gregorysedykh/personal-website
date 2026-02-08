import { ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none'
        }
      }
    }), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'fr', 'de'],
          defaultLang: 'en',
          reRenderOnLangChange: true,
        },
        loader: TranslocoHttpLoader
      })
  ]
};
