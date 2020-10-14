import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabLinkService } from '../tab-link.service';

@Component({
  selector: 'app-tab-link',
  templateUrl: './tab-link.component.html',
  styleUrls: ['./tab-link.component.css']
})
export class TabLinkComponent implements OnInit, OnDestroy {

  @ViewChild('scrollCont', { static: true }) scrollContRef: ElementRef<HTMLElement>;

  private itemActiveSub: Subscription;

  constructor(private tabLinkService: TabLinkService) { }

  ngOnInit() {
    this.itemActiveSub = this.tabLinkService.itemActive
      .subscribe(({ offsetLeft, offsetWidth }) => this.fixScrollPos(offsetLeft, offsetWidth));
  }

  ngOnDestroy() {
    this.itemActiveSub.unsubscribe();
  }

  scroll(dir: 'left' | 'right', scrollCont: HTMLElement) {
    scrollCont.scrollLeft = scrollCont.scrollLeft + (dir === 'left' ? -1 : 1) * 100;
  }

  private fixScrollPos(itemPos: number, itemWidth: number) {
    const scrollCont = this.scrollContRef.nativeElement;
    if (scrollCont.scrollLeft > itemPos || scrollCont.offsetWidth < itemWidth) {
      scrollCont.scrollLeft = itemPos;
      return;
    }
    if (scrollCont.scrollLeft + scrollCont.offsetWidth < itemPos + itemWidth) {
      scrollCont.scrollLeft = itemPos - (scrollCont.offsetWidth - itemWidth);
    }
  }

}
