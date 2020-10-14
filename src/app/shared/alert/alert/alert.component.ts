import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AttachViewComponent } from '../../attach-view/attach-view.component';
import { Subscription, Subject, timer } from 'rxjs';
import { switchMap, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent extends AttachViewComponent implements OnInit, OnDestroy {

  @ViewChild('container', { static: false }) container: ElementRef;

  private closeSub: Subscription;
  private delaySource = new Subject<number>();

  ngOnInit() {
    this.closeSub = this.delaySource.pipe(
      switchMap(due => timer(due)),
      tap(() => (this.container.nativeElement as HTMLElement).classList.add('closed')),
      delay(300)
    ).subscribe(this.detach.bind(this, this.instaData));

    this.close(5000);
  }

  ngOnDestroy() {
    this.closeSub.unsubscribe();
  }

  close(due: number) {
    this.delaySource.next(due);
  }

}
