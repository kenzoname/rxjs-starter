import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute) {
    activeRouter.paramMap.subscribe((val) => {
      console.log('OB PARAMS: ', val['params'].slug)
    })
  }

  ngOnInit(): void {
    let id = this.activeRouter.snapshot.paramMap.get('slug');
    console.log('PARAM SNAPSHOT: ', id)
  }

}
