import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { TabLinkService } from '../tab-link.service';

@Component({
  selector: 'app-tab-link-item',
  templateUrl: './tab-link-item.component.html',
  styleUrls: ['./tab-link-item.component.scss']
})
export class TabLinkItemComponent implements AfterViewInit {

  @Input() text: string;
  @Input() path = '';
  @ViewChild(RouterLinkActive, { static: false }) rla: RouterLinkActive;

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private tabLinkService: TabLinkService
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.rla.isActive) {
        this.linkClick();
      }
    }, 350);
  }

  linkClick() {
    this.tabLinkService.active(this.elRef.nativeElement);
  }

}
