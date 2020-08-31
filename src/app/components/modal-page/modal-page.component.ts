import { Component, OnDestroy } from '@angular/core';
import { ModalService } from 'src/shared/modal/modal.service';
import { TempComponent } from './temp.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnDestroy {

  private modalSub: Subscription;

  constructor(private modalService: ModalService) { }

  ngOnDestroy(): void {
    if (this.modalSub) { this.modalSub.unsubscribe(); }
  }

  open(template: any) {
    this.modalService.open({
      title: 'Modal title',
      content: { template },
      actions: [
        { text: 'Cancel' },
        { text: 'OK' }
      ]
    });
  }

  openWithComp() {
    this.modalService.open({
      title: 'Modal title',
      content: {
        template: TempComponent
      },
      actions: [
        { text: 'Cancel' },
        { text: 'OK' }
      ]
    }).result.subscribe(console.log);
  }

}
