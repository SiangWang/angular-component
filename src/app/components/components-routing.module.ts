import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { TabLinkPageComponent } from './tab-link-page/tab-link-page.component';
import { Page1Component } from './tab-link-page/page1.component';
import { Page2Component } from './tab-link-page/page2.component';
import { Page3Component } from './tab-link-page/page3.component';
import { PaginationPageComponent } from './pagination-page/pagination-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'alert',
        component: AlertPageComponent
      },
      {
        path: 'modal',
        component: ModalPageComponent
      },
      {
        path: 'tab-link',
        component: TabLinkPageComponent,
        children: [
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
          { path: 'page3', component: Page3Component },
          { path: '', redirectTo: 'page1' }
        ]
      },
      {
        path: 'pagination',
        component: PaginationPageComponent
      },
      {
        path: '',
        redirectTo: 'alert'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
