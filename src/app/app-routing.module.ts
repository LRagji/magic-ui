import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'custom-component', loadChildren: () => import('./custom-component/custom-component.module').then(m => m.CustomComponentModule) }, { path: 'dynamic', loadChildren: () => import('./dynamic-render/dynamic-render.module').then(m => m.DynamicRenderModule) }, { path: 'tree-editor', loadChildren: () => import('./tree-editor/tree-editor.module').then(m => m.TreeEditorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
