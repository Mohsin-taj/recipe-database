import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
//import Aura from '@primeng/themes/aura';
import Aura from '@primeuix/themes/aura';
import { appRoutes } from './app.routes'; // Ensure this matches your file exports

export const appConfig: ApplicationConfig = {
  providers: [
    // Recommended for catching errors outside the Angular zone (e.g., in v19/v20)
    provideBrowserGlobalErrorListeners(), 
    
    // Required for PrimeNG animations to work correctly
    provideAnimationsAsync(), 
    
    provideRouter(appRoutes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ],
};
