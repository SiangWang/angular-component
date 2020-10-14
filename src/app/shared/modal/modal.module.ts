import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { ModalContentDirective } from './modal-content.directive';

@NgModule({
  declarations: [
    ModalComponent,
    ModalContentDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [ModalService],
  entryComponents: [ModalComponent]
})
export class ModalModule { }
