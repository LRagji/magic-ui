import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule, MatIcon } from '@angular/material/icon';


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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatButton, MatSidenav, MatIcon]
})
export class AppModule { }
