import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'prophecy' },
  },
  {
    path: 'prophecy/:id',
    loadComponent: () =>
      import('./components/prophecy-detail/prophecy-detail').then(m => m.ProphecyDetail),
  },
  {
    path: 'references',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'reference' },
  },
  {
    path: 'reference/:id',
    loadComponent: () =>
      import('./components/reference-detail/reference-detail').then(m => m.ReferenceDetail),
  },
  {
    path: 'covenants',
    loadComponent: () => import('./components/app-list/app-list').then(m => m.AppList),
    data: { entityType: 'covenant' },
  },
  {
    path: 'covenant/:id',
    loadComponent: () =>
      import('./components/covenant-detail/covenant-detail').then(m => m.CovenantDetail),
  },
  {
    path: 'network',
    loadComponent: () =>
      import('./components/character-network/character-network').then(m => m.CharacterNetwork),
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./components/character-detail/character-detail').then(m => m.CharacterDetail),
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./components/unified-chart/unified-chart').then(m => m.UnifiedChart),
  },
  { path: '**', redirectTo: '' },
];
