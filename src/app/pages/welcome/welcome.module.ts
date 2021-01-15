import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
