import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURL } from './app.url';

const routes: Routes = [
  { path: '', redirectTo: AppURL.dashboard, pathMatch: 'full' },
  {
    path: AppURL.dashboard,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: AppURL.hero,
    loadChildren: () => import('./modules/list-hero/list-hero.module').then((m) => m.ListHeroModule),
  },
  {
    path: AppURL.post,
    loadChildren: () => import('./modules/post/post.module').then((m) => m.PostModule),
  },
  {
    path: AppURL.calculate,
    loadChildren: () => import('./modules/cal-area/cal-area.module').then((m) => m.CalAreaModule),
  },
  {
    path: AppURL.checkCitizen,
    loadChildren: () => import('./modules/check-citizen/check-citizen.module').then((m) => m.CheckCitizenModule),
  },
  {
    path: AppURL.diamond,
    loadChildren: () => import('./modules/print-diamond/print-diamond.module').then((m) => m.PrintDiamondModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
