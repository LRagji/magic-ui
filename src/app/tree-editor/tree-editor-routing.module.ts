import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeEditorComponent } from './tree-editor.component';

const routes: Routes = [{ path: '', component: TreeEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeEditorRoutingModule { }
