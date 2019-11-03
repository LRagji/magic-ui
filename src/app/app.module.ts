import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion'
import { MatListModule, MatList } from '@angular/material/list';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';


//[entrycomponents]This is a spill when you have to include lazy loaded components here in the main module, but it seeems thata how it is with current version on angular..
//Following is the issue https://github.com/angular/angular/issues/14324 and seems to be fixed in version 9
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatButton, MatSidenav, MatIcon, MatExpansionPanel, MatList, MatGridList, MatFormField]
})
export class AppModule { }
