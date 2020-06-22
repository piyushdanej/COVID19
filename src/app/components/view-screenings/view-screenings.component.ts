import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Patient } from '../../interfaces/patient';

@Component({
  selector: 'app-view-screenings',
  templateUrl: './view-screenings.component.html',
  styleUrls: ['./view-screenings.component.css']
})
export class ViewScreeningsComponent implements OnInit {
  
  tabIndexHighlight : number
  patients: Patient[];

  constructor( private router : Router ,private route : ActivatedRoute, private mainService: MainService) {
    debugger; 
    console.log("ViewScreenings constructor")
    this.route.queryParams.subscribe(params =>{
      debugger;
      this.tabIndexHighlight = params["id"]
    })
  }

  ngOnInit() {
    this.mainService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Patient
        } as Patient;
      })
    });
  }

  selectPatient(patient){
   
    this.mainService.setSelectedPatient(patient);
  }

  routeToProfile(){
    this.router.navigate(["/my-profile"] , { queryParams: { path : "view-screenings"}})
    // routerLink="/my-profile" 
  }

}
