import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentRoutingModule } from './custom-component-routing.module';
import { CustomComponentComponent } from './custom-component.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CustomComponentComponent],
  imports: [
    CommonModule,
    CustomComponentRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomComponentModule { }
