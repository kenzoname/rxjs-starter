import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  routes = {
    'filters':[
      {
        name: 'filter',
        url: 'filter/filter'
      },
      {
        name: 'find',
        url: 'filter/find'
      },
      {
        name: 'debounce',
        url: 'filter/debounce'
      },
      {
        name: 'debounceTime',
        url: 'filter/debounce-time'
      },
      {
        name: 'distinct',
        url: 'filter/distinct'
      },
      {
        name: 'distinctUntilChanged',
        url: 'filter/distinct-until-changed'
      },
      {
        name: 'first-last-single',
        url: 'filter/first-last-single'
      },
      {
        name: 'skip-skipUntil/While',
        url: 'filter/skip'
      },
      {
        name: 'take-takeLast/Until/While',
        url: 'filter/take'
      },
      {
        name: 'throttle-throttleTime/',
        url: 'filter/take'
      },
    ],
    'tranforms':[],
    'utilities':[],
    'combines':[
      {
        name: 'combineAll',
        url: 'combine/combine-all'
      },
      {
        name: 'combineLatest',
        url: 'combine/combine-latest'
      },
      {
        name: 'concatAll',
        url: 'combine/combine-all'
      },
      {
        name: 'forkJoin',
        url: 'combine/fork-join'
      },
      {
        name: 'merge',
        url: 'combine/merge'
      },
      {
        name: 'withLatestFrom',
        url: 'combine/with-latest-from'
      },
      {
        name: 'startWith',
        url: 'combine/start-with'
      },
      {
        name: 'startWith',
        url: 'combine/start-with'
      },
      {
        name: 'race',
        url: 'combine/race'
      },
      {
        name: 'zip',
        url: 'combine/zip'
      },
    ],
    'hoos':[
      {
        name: 'switchMap',
        url: 'hoos/swich-map'
      },
      {
        name: 'mergeMap',
        url: 'hoos/merge-map'
      },
      {
        name: 'concathMap',
        url: 'hoos/concat-map'
      }

    ]
  }
}
