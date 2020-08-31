import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef, ComponentFactoryResolver,
  Type, ComponentRef, TemplateRef
} from '@angular/core';
import { AttachViewComponent } from '../../attach-view/attach-view.component';
import { ModalContentComponent } from '../modal-content.component';
import { ModalResult, ModalAction } from '../modal-obj';
import { ModalContentDirective } from '../modal-content.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends AttachViewComponent<ModalResult> implements OnInit, OnDestroy {

  @ViewChild('modalContent', { static: false }) modalContent: ElementRef;
  @ViewChild(ModalContentDirective, { static: true }) mdTemplate: ModalContentDirective;

  private contentRef: ComponentRef<ModalContentComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    if (!this.contentIsString) {
      this.loadCompTemp();
    }
    document.body.classList.add('overflow-hidden');
  }

  ngOnDestroy() {
    setTimeout(() => {
      if (document.body.getElementsByTagName('app-modal').length === 0) {
        document.body.classList.remove('overflow-hidden');
      }
    }, 0);
  }

  /** content is a string */
  get contentIsString() { return typeof this.instaData.content.template === 'string'; }

  /** content is a component */
  get contentIsComponent() { return this.instaData.content.template instanceof Function; }

  /** content is an ng-template */
  get contentIsTemplate() { return this.instaData.content.template instanceof TemplateRef; }

  private loadCompTemp() {
    const viewContainerRef = this.mdTemplate.viewContainerRef;
    viewContainerRef.clear();
    if (this.contentIsComponent) {
      const contentFactory = this.componentFactoryResolver.resolveComponentFactory(this.instaData.content.template as Type<any>);
      this.contentRef = viewContainerRef.createComponent(contentFactory);
      this.contentRef.instance.instaData = this.instaData.content.instData;
    }
    if (this.contentIsTemplate) {
      viewContainerRef.createEmbeddedView(this.instaData.content.template as TemplateRef<any>);
    }
  }

  onClose(action?: ModalAction) {
    if (action && action.primary) {
      // check the validity of content
      if (!this.contentRef.instance.valid) {
        return;
      }
    }

    (this.modalContent.nativeElement as HTMLElement).classList.add('zoomOut');
    setTimeout(() =>
      this.detach(
        new ModalResult(
          action ? new ModalAction(action.text, action.primary) : {} as ModalAction,
          this.contentRef ? this.contentRef.instance.resultData : null
        )
      ),
      300
    );
  }

}
