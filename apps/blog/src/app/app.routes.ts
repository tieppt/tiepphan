import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];
