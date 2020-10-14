import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TabLinkService {

  private itemActiveSource = new Subject<HTMLElement>();
  itemActive = this.itemActiveSource.asObservable();

  active(item: HTMLElement) {
    this.itemActiveSource.next(item);
  }

}
