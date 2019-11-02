import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { ComponentType, ComponentPortal, DomPortalHost } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class ComponentInjectorService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  attach(container: HTMLElement, componentType: ComponentType<any>) {
    let bodyPortalHost = new DomPortalHost(
      container,
      this.componentFactoryResolver,
      this.appRef,
      this.injector);

    const componentRef = bodyPortalHost.attachComponentPortal(new ComponentPortal(componentType));
    //componentRef.detach = ;
    return {
      instance: componentRef.instance,
      detach: () => { bodyPortalHost.detach(); bodyPortalHost.dispose(); }
    };
  }
}
