// import { Routes } from '@angular/router';
// import { LoginComponent } from './pages/login.component';
// import { DashboardComponent } from './pages/dashboard.component';
// import { authGuard } from './guards/auth.guard';    //  Importar el guardia de autenticación
// import { MainComponent } from './layout/main.component';

// export const routes: Routes = [
//     { path: 'login', component: LoginComponent },
//     { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { MainComponent } from './layout/main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
