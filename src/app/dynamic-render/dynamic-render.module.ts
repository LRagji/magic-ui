import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRenderRoutingModule } from './dynamic-render-routing.module';
import { DynamicRenderComponent } from './dynamic-render.component';


@NgModule({
  declarations: [DynamicRenderComponent],
  imports: [
    CommonModule,
    DynamicRenderRoutingModule
  ]
})
export class DynamicRenderModule { }
