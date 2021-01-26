import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-combine-lasest',
  templateUrl: './combine-lasest.component.html',
  styleUrls: ['./combine-lasest.component.scss']
})
export class CombineLasestComponent implements OnInit {
  messi: Subject<number> = new Subject();
  ronaldo : Subject<number>  = new Subject();
  kane : Subject<number> = new Subject();
  constructor(private log: EventService) { }

  ngOnInit(): void {
    combineLatest([this.messi.pipe(scan((acc, curr) => acc + curr, 0)), this.ronaldo.pipe(scan((acc, curr) => acc + curr, 0)), this.kane.pipe(scan((acc, curr) => acc + curr, 0))]).subscribe((data) =>{
      this.log.info('EVEN DATA', data);
    }, this.log.error, () => this.log.info('COMPLETE'))
  }
  goal(name) {
    this.log.info(name + ' goal !');
    switch (name){
      case 'messi':
        this.messi.next(1);break;
      case 'ronaldo':
        this.ronaldo.next(1);break;
      case 'kane':
        this.kane.next(1);break;
    }

  }
  complete(name) {
    this.log.info(name + ' complete !');
    switch (name){
      case 'messi':
        this.messi.complete();break;
      case 'ronaldo':
        this.ronaldo.complete();break;
      case 'kane':
        this.kane.complete();break;
    }

  }

}
