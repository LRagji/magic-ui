import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRenderRoutingModule } from './dynamic-render-routing.module';
import { DynamicRenderComponent } from './dynamic-render.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [DynamicRenderComponent, DisplayComponent],
  imports: [
    CommonModule,
    DynamicRenderRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DynamicRenderModule { }
