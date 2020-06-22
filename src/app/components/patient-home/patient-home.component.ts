import { MainService } from 'src/app/services/main.service';

import { Component, OnInit } from '@angular/core';
import { faChevronRight, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  faChevronRight = faChevronRight;
  faUser = faUser;
  faCog = faCog;
  patientName : string ;
  constructor(private mainService : MainService ,
              private router :Router) { }

  ngOnInit() {
    this.patientName = this.mainService.getLoggedInPatient().firstName;
  }

  routeToProfile(){
    // this.router.navigate(["/my-profile"],{ queryParams: { path : "home"}});
    // routerLink="/my-profile"
  }


}
