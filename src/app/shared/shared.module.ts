import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleInterfaceComponent } from './console-interface/console-interface.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { PrettyPrintPipe } from './commons/pretty.pipe';
import { ObserverService } from './fake/observer.service';



@NgModule({
  declarations: [ConsoleInterfaceComponent, PrettyPrintPipe],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  providers: [ObserverService],
  exports: [NzButtonModule, NzIconModule, ConsoleInterfaceComponent, PrettyPrintPipe]
})
export class SharedModule { }
