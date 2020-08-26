import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TabLinkComponent } from './tab-link/tab-link.component';
import { TabLinkItemComponent } from './tab-link-item/tab-link-item.component';
import { TabLinkService } from './tab-link.service';

@NgModule({
  declarations: [
    TabLinkComponent,
    TabLinkItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  providers: [TabLinkService],
  exports: [
    TabLinkComponent,
    TabLinkItemComponent
  ]
})
export class TabLinkModule { }
