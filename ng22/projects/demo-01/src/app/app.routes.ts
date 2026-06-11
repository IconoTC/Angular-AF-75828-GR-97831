import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import { TimeOld } from './core/services/time';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: 'home', component: HomePage},
  // {path: 'dashboard', component: DashboardPage},
  // {path: 'products', component: ProductsPage},
  // {path: 'about', component: AboutPage},

  {
    path: 'home',
    title: 'Home | Demo 01',
    data: {
      label: 'Inicio',
    },
    loadComponent: () => import('./features/home/home-page').then((m) => m.default),
  },
  {
    path: 'dashboard',
    title: 'Dashboard | Demo 01',
    data: {
      label: 'Dashboard',
    },
    loadComponent: () => import('./features/dashboard/dashboard-page').then((m) => m.default),
  },
  {
    path: 'tasks',
    title: 'Tasks | Demo 01',
    data: {
      label: 'Tareas',
    },
    loadComponent: () => import('./features/tasks/tasks-page').then((m) => m.default),
  },
  {
    path: 'notes',
    title: 'Notes | Demo 01',
    data: {
      label: 'Notas',
    },
    loadComponent: () => import('./features/notes/notes-page').then((m) => m.default),
  },
  {
    path: 'products',
    title: 'Products | Demo 01',
    data: {
      label: 'Productos',
    },
    loadComponent: () => import('./features/products/products-page').then((m) => m.default),
    providers: [TimeOld],
  },
  {
    path: 'about',
    title: 'About | Demo 01',
    data: {
      label: 'Nosotros',
    },
    loadComponent: () => import('./features/about/about-page').then((m) => m.default),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

export const getRoutes = (): MenuOption[] => {
  return routes.map((route) => {
    if (route.data?.['label'] && route.path) {
      return {
        label: route.data?.['label'] as string,
        path: route.path,
      };
    }
    return route;
  }) as MenuOption[];
};
