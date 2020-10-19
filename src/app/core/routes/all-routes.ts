import { Routes } from '@angular/router';

export const ALL_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../public/public.module').then(m => m.PublicModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
