import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, merge, of, throwError, zip,  } from 'rxjs';
import { catchError, concatMap, delay, first, map, mergeMap, take } from 'rxjs/operators';
import { EventService } from 'src/app/shared/event.service';
import { ObserverService } from 'src/app/shared/fake/observer.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor(private obService: ObserverService, private eventService: EventService) { }

  ngOnInit(): void {
    let ob1 = this.obService.getUser(1).pipe(map((user) => user.userId ), catchError((err) => of(null)), delay(3000));
    let ob2 = this.obService.getUser(2).pipe(first(), catchError((err) => of(null)));
    let ob3 = this.obService.getUser(6).pipe(first(), catchError((err) => of('nodata')));
    // forkJoin(ob1, ob2, ob3).subscribe(([data1, data2, data3]) => {console.log('FORK JOIN', data1, data2)})
    // combineLatest(ob1, ob2, ob3).subscribe(([data1, data2, data3]) => {console.log('Combine latest', data1, data2)})
    // merge(ob1, ob2, ob3).subscribe((completeData) => {console.log('MERGE', completeData)})
    concat(ob1, ob2, ob3).subscribe((completeData) => {this.eventService.success(completeData, 'CONCAT')})
    // zip(ob1, ob2, ob3).subscribe((data) => {
    //   this.eventService.info('zip', data)
    // })
    // this.obService.getUserID().pipe(concatMap((id) => this.obService.getUser(id) )).subscribe((data) => {
    //   console.log('DATA', data)
    //   this.eventService.info(data)
    // })
    // this.obService.getUserID().pipe(concatMap((id) => this.obService.getUser(id) )).subscribe((data) => {
    //   console.log('DATA', data)
    //   this.eventService.info(data)
    // })
    // this.obService.getUserID(true).subscribe(this.eventService.info, (err) =>{  this.eventService.error(err)});
  }

}
