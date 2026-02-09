import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { appRoutes } from './app.routes'; // Ensure this matches your file exports

export const appConfig: ApplicationConfig = {
  providers: [

    provideBrowserGlobalErrorListeners(),



    provideRouter(appRoutes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ],
};
