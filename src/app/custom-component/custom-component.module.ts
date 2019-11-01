import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentRoutingModule } from './custom-component-routing.module';
import { CustomComponentComponent } from './custom-component.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [CustomComponentComponent],
  imports: [
    CommonModule,
    CustomComponentRoutingModule,
    MatSidenavModule
  ]
})
export class CustomComponentModule { }
