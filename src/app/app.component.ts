import { Component } from '@angular/core';
import { AlertService } from 'src/shared/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(alertService: AlertService) {
    alertService.alert('hello');
  }

}
