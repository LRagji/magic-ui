import { Component, OnInit, ComponentFactoryResolver, ElementRef, Injector, ComponentFactory, ComponentRef, Input, Output, EventEmitter } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-dynamic-render',
  templateUrl: './dynamic-render.component.html',
  styleUrls: ['./dynamic-render.component.css']
})
export class DynamicRenderComponent implements OnInit {

  private hostElement: HTMLElement;
  private supportedComponents: Array<any> = [MatButton, MatSidenav, MatIcon];//This list has to match entryComponents of app.module
  private supportedComponentFactories: Map<string, ComponentFactory<any>> = new Map();
  private supportedComponentsInstances: ComponentRef<any>[] = [];

  constructor(componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef, private injector: Injector) {
    this.hostElement = elementRef.nativeElement;
    this.supportedComponents.forEach(component => {
      const factory = componentFactoryResolver.resolveComponentFactory(component);
      this.supportedComponentFactories.set(factory.selector, factory);
    });
    console.table(this.supportedComponentFactories)
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.supportedComponentsInstances.forEach(comp => comp.changeDetectorRef.detectChanges());
  }

  ngOnDestroy() {
    // destroy these components else there will be memory leaks
    this.supportedComponentsInstances.forEach(comp => comp.destroy());
    this.supportedComponentsInstances.length = 0;
  }

  @Output()
  contentRendered = new EventEmitter();

  @Input()
  set content(content) {
    this.ngOnDestroy();
    if (content) {
      this.build(content);
      this.contentRendered.emit();
    }
  }

  private build(content) {
    this.hostElement.innerHTML = content || '';

    if (!content) { return; }

    this.supportedComponentFactories.forEach((factory, selector) => {
      const embeddedComponentElements = Array.from(this.hostElement.querySelectorAll(selector));

      for (const element of embeddedComponentElements) {
        const projectableNodes = [Array.from(element.childNodes)];
        const embeddedComponent = factory.create(this.injector, projectableNodes, element)
        for (const attr of (element as any).attributes) {
          embeddedComponent.instance[attr.nodeName] = attr.nodeValue;
        }
        this.supportedComponentsInstances.push(embeddedComponent);
      }
    });
  }
}