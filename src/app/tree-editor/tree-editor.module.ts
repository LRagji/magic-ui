import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeEditorRoutingModule } from './tree-editor-routing.module';
import { TreeEditorComponent, ChecklistDatabase } from './tree-editor.component';

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
import { MatSliderModule } from '@angular/material/slider'
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
  declarations: [TreeEditorComponent],
  imports: [
    CommonModule,
    TreeEditorRoutingModule,

    MatTreeModule,
    MatCheckboxModule,
    CommonModule,
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
    MatSliderModule,
    FormsModule
  ],
  providers: [ChecklistDatabase]
})
export class TreeEditorModule { }
