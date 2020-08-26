import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { ModalOptions, ModalResult } from './modal-obj';
import { AttachViewService } from '../attach-view/attach-view.service';

@Injectable()
export class ModalService extends AttachViewService {

  open(options: ModalOptions) {
    return super.attach<ModalResult>(ModalComponent, options);
  }

}
