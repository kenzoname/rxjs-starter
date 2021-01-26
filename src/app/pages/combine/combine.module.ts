import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineComponent } from './combine/combine.component';
import { ForkJoinComponent } from './combine/fork-join/fork-join.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CombineLasestComponent } from './combine/combine-lasest/combine-lasest.component';
import { NzIconModule } from 'ng-zorro-antd';

const routes: Routes = [
  {path: '', component: CombineComponent, children: 
    [
      {path: 'fork-join', component: ForkJoinComponent},
      {path: 'combine-latest', component: CombineLasestComponent}
    ]
  }
]

@NgModule({
  declarations: [CombineComponent, ForkJoinComponent, CombineLasestComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CombineModule { }
