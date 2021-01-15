import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleInterfaceComponent } from './console-interface/console-interface.component';
import { NzButtonModule } from 'ng-zorro-antd';
import { PrettyPrintPipe } from './commons/pretty.pipe';



@NgModule({
  declarations: [ConsoleInterfaceComponent, PrettyPrintPipe],
  imports: [
    CommonModule,
    NzButtonModule
  ],
  exports: [ConsoleInterfaceComponent, PrettyPrintPipe]
})
export class SharedModule { }
