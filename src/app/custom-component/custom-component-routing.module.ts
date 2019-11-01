import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomComponentComponent } from './custom-component.component';

const routes: Routes = [{ path: '', component: CustomComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomComponentRoutingModule { }
