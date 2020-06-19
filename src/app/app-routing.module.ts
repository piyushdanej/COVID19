import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableCliniciansComponent } from './components/available-clinicians/available-clinicians.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { ClinicianHomeComponent } from './components/clinician-home/clinician-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'patient-home'},
  { path: 'patient-home', component: PatientHomeComponent },
  { path: 'clinician-home', component: ClinicianHomeComponent },
  { path: 'available-clinicians', component: AvailableCliniciansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }