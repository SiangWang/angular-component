import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const d = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
  'Vestibulum at eros'
];

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent implements OnInit {

  allData$ = of(d);
  data$: Observable<string[]>;
  state = new BehaviorSubject<{ skip: number; take: number; }>({ skip: 0, take: 3 });

  ngOnInit() {
    this.data$ = combineLatest([
      this.allData$,
      this.state
    ]).pipe(
      map(([data, { skip, take }]) => data.slice(skip, skip + take))
    );
  }

}
