import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Esto he añadido para la prueba de la ruta
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Esto he añadido para la prueba de la ruta
    provideHttpClient(), // Proveedor para las peticiones HTTP
  ],
};
