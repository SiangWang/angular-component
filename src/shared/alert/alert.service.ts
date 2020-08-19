import { Injectable } from '@angular/core';
import { AttachViewService } from '../attach-view/attach-view.service';
import { AlertComponent } from './alert/alert.component';

@Injectable()
export class AlertService extends AttachViewService {

  alert(message: string) {
    super.attach<string>(AlertComponent, message);
  }

}
