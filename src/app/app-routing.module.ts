import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { ViewScreeningsComponent } from './components/view-screenings/view-screenings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { ClinicianHomeComponent } from './components/clinician-home/clinician-home.component';
import { ScreeningComponent } from './components/screening/screening.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'patient-home'},
  { path: 'patient-home', component: PatientHomeComponent },
  { path: 'screenings' , component : ViewScreeningsComponent},
  { path: 'clinician-home', component: ClinicianHomeComponent },
  { path: 'available-clinicians', component: AvailableCliniciansComponent },
  { path: 'my-profile' , component : PatientDetailsComponent},
  { path: 'patient-screening' , component : ScreeningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }