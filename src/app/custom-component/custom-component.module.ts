import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentRoutingModule } from './custom-component-routing.module';
import { CustomComponentComponent } from './custom-component.component';
import { DynamicRenderModule } from '../dynamic-render/dynamic-render.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [CustomComponentComponent],
  imports: [
    CommonModule,
    CustomComponentRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatToolbarModule,
    MatDividerModule,
    DynamicRenderModule
  ]
})
export class CustomComponentModule { }
