import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: ['./alert-page.component.scss']
})
export class AlertPageComponent {

  constructor(private alertService: AlertService) { }

  alert() {
    this.alertService.alert('this is an alert');
  }

}
