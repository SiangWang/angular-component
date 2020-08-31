import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService extends BehaviorSubject<TemplateRef<any>> {

  set(value: TemplateRef<any>) {
    setTimeout(() => super.next(value), 0);
  }

  clear() {
    super.next(null);
  }

}
