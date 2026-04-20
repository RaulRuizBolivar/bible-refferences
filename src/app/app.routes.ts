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
  {
    path: 'references',
    loadComponent: () =>
      import('./components/references-list/references-list').then(m => m.ReferencesList),
  },
  {
    path: 'reference/:id',
    loadComponent: () =>
      import('./components/reference-detail/reference-detail').then(m => m.ReferenceDetail),
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./components/unified-chart/unified-chart').then(m => m.UnifiedChart),
  },
  { path: '**', redirectTo: '' },
];
