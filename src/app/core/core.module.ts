import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [LayoutComponent],
})
export class CoreModule { }
