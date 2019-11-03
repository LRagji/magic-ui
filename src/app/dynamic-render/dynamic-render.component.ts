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
    this.supportedComponentsInstances.forEach(comp => comp.destroy());
    this.supportedComponentsInstances.length = 0;
    this.hostElement.innerHTML = '';
  }

  @Output()
  contentRendered = new EventEmitter();

  @Input()
  set content(content) {
    this.ngOnDestroy();
    if (content) {
      this.build(content);
    }
  }

  private build(content) {
    this.hostElement.innerHTML = content;

    this.supportedComponentFactories.forEach((factory, selector) => {
      const groupedSelectorMarkupElements = Array.from(this.hostElement.querySelectorAll(selector));

      for (const markupElement of groupedSelectorMarkupElements) {
        const projectableNodes = [Array.from(markupElement.childNodes)];
        const embeddedComponent = factory.create(this.injector, projectableNodes, markupElement);
        //console.table(embeddedComponent.instance);
        for (const attr of (markupElement as any).attributes) {
          if (attr.nodeName in embeddedComponent.instance) {
            embeddedComponent.instance[attr.nodeName] = attr.nodeValue;
          }
          else{
            console.log("Skipped:"+attr.nodeName+" Value:"+attr.nodeValue);
          }
        }
        // console.table(embeddedComponent.instance);
        this.supportedComponentsInstances.push(embeddedComponent);
      }
    });
    this.contentRendered.emit();
  }

}