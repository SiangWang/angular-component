import { Injectable, ComponentRef, ComponentFactoryResolver, Injector, ApplicationRef, Type, EmbeddedViewRef } from '@angular/core';
import { AttachViewComponent } from './attach-view.component';
import { AttachViewRef } from './attach-view-ref';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class AttachViewService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) { }

  /**
   * @attach `T` result data type
   */
  protected attach<T = any>(component: Type<AttachViewComponent>, instaData?: any) {
    const componentFactory = this.resolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);
    componentRef.instance.instaData = instaData;
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    componentRef.instance.onDetach
      .pipe(mapTo(componentRef))
      .subscribe(this.detach.bind(this));

    return {
      result: componentRef.instance.onDetach,
      close: componentRef.instance.detach.bind(componentRef.instance)
    } as AttachViewRef<T>;
  }

  protected detach(componentRef: ComponentRef<AttachViewComponent>) {
    componentRef.instance.onDetach.unsubscribe();
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

}
