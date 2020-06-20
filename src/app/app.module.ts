
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { ClinicianHomeComponent } from './components/clinician-home/clinician-home.component';

import { PatientToCallComponent } from './components/patient-to-call/patient-to-call.component';
import { TabListComponent } from './components/tab-list/tab-list.component';

import {ViewScreeningsComponent} from './components/view-screenings/view-screenings.component'
import { ScreeningTabComponent } from './components/screening-tab/screening-tab.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { LoginComponent } from './components/login/login.component';
import { ScreeningComponent } from './components/screening/screening.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvailableCliniciansComponent,
    PatientHomeComponent,
    ClinicianHomeComponent,
    
    PatientToCallComponent,
    TabListComponent,
    ViewScreeningsComponent,
    ScreeningTabComponent,
    PatientDetailsComponent,
    LoginComponent,
    ScreeningComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
