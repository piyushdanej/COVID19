import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { ClinicianHomeComponent } from './components/clinician-home/clinician-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableCliniciansComponent,
    PatientHomeComponent,
    ClinicianHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
