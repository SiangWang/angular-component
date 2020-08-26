import { Component } from '@angular/core';
import { AlertService } from 'src/shared/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private alertService: AlertService) { }

  alert() {
    this.alertService.alert('this is an alert');
  }

}
