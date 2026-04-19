import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/prophecies-list/prophecies-list').then(m => m.PropheciesList),
  },
  {
    path: 'prophecy/:id',
    loadComponent: () =>
      import('./components/prophecy-detail/prophecy-detail').then(m => m.ProphecyDetail),
  },
  { path: '**', redirectTo: '' },
];
