import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { BannerService } from 'src/services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('bannerTemp', { static: true }) bannerTemp: TemplateRef<any>;

  constructor(private banner: BannerService) { }

  ngOnInit() {
    this.banner.set(this.bannerTemp);
  }

  ngOnDestroy() {
    this.banner.clear();
  }

}
