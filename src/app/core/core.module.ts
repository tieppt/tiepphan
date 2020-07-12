import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    RouterModule.forChild(routes),
    ScullyLibModule,
  ],
  exports: [LayoutComponent],
})
export class CoreModule { }
