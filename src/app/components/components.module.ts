import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { AlertModule } from 'src/shared/alert/alert.module';
import { ModalModule } from 'src/shared/modal/modal.module';
import { TabLinkModule } from 'src/shared/tab-link/tab-link.module';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { TempComponent } from './modal-page/temp.component';
import { TabLinkPageComponent } from './tab-link-page/tab-link-page.component';
import { Page1Component } from './tab-link-page/page1.component';
import { Page2Component } from './tab-link-page/page2.component';
import { Page3Component } from './tab-link-page/page3.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    AlertPageComponent,
    ModalPageComponent,
    TempComponent,
    TabLinkPageComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AlertModule,
    ModalModule,
    TabLinkModule
  ]
})
export class ComponentsModule { }
