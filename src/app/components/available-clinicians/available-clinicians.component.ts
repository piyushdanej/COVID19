import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft , faComment } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'available-clinicians',
  templateUrl: './available-clinicians.component.html',
  styleUrls: ['./available-clinicians.component.css']
})
export class AvailableCliniciansComponent implements OnInit {

  clinicians : string[];
  dummyClinicians : string[];
  faArrowLeft = faArrowLeft;
  faComment = faComment;

  constructor(private mainService : MainService) { 
    this.dummyClinicians = [
      "Clinician Name" ,"Clinician Name" ,"Clinician Name" ,"Clinician Name" ,
      "Clinician Name" ,"Clinician Name" ,"Clinician Name" ,"Clinician Name"
    ]
  }

  ngOnInit() {
    this.clinicians = this.getAvailableClinicians() || this.dummyClinicians;


  }

  navigateBack()

  getAvailableClinicians(){
    return this.mainService.getAvailableClinicians();
  }


}
