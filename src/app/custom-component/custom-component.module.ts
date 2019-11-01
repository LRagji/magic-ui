import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomComponentRoutingModule } from './custom-component-routing.module';
import { CustomComponentComponent } from './custom-component.component';


@NgModule({
  declarations: [CustomComponentComponent],
  imports: [
    CommonModule,
    CustomComponentRoutingModule
  ]
})
export class CustomComponentModule { }
