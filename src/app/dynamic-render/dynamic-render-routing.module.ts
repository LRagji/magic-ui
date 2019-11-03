import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicRenderComponent } from './dynamic-render.component';

const routes: Routes = [{ path: '', component: DynamicRenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRenderRoutingModule { }
