import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { EventService } from '../event.service';
import { Log } from '../log.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-console-interface',
  templateUrl: './console-interface.component.html',
  styleUrls: ['./console-interface.component.scss']
})
export class ConsoleInterfaceComponent implements OnInit {
  logs: Log[] = [];
  sub: Subject<any>;
  constructor(private eventService: EventService) {
    eventService.$log.pipe().subscribe((log: Log) => {
      this.logs.push(log)
    })
  }
  clearLogs = () => this.logs = []
  ngOnInit(): void {
  }

}
