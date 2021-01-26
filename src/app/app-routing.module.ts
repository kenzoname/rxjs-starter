import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'filter', loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterModule) },
  { path: 'tranform', loadChildren: () => import('./pages/tranform/tranform.module').then(m => m.TranformModule) },
  { path: 'utility', loadChildren: () => import('./pages/utility/utility.module').then(m => m.UtilityModule) },
  { path: 'combine', loadChildren: () => import('./pages/combine/combine.module').then(m => m.CombineModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
