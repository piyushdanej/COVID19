
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { ClinicianHomeComponent } from './components/clinician-home/clinician-home.component';

import { PatientToCallComponent } from './components/patient-to-call/patient-to-call.component';
import { TabListComponent } from './components/tab-list/tab-list.component';

import {ViewScreeningsComponent} from './components/view-screenings/view-screenings.component'
import { ScreeningTabComponent } from './components/screening-tab/screening-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    AvailableCliniciansComponent,
    PatientHomeComponent,
    ClinicianHomeComponent,
    
    PatientToCallComponent,
    TabListComponent,
    ViewScreeningsComponent,
    ScreeningTabComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
