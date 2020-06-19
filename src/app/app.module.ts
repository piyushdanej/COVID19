import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableCliniciansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
