import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ':slug', component: FilterComponent}
]

@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilterModule { }
