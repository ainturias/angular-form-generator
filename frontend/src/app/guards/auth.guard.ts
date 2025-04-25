import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true; //  permitir acceso
  } else {
    router.navigate(['/login']); //  redirigir si no hay token
    return false;
  }
};
