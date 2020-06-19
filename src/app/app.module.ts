import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { AvailableCliniciansComponent } from './available-clinicians/available-clinicians.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen2Component,
    AvailableCliniciansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
