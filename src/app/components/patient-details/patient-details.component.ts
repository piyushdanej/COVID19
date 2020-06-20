import { Component, OnInit } from '@angular/core';
import { faArrowLeft , faComment } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor() { }
  isTravelHistory:"Yes";
  feedback:"Healthy"
  feedbackDiscription;

  faArrowLeft = faArrowLeft;

  ngOnInit() {
    this.isTravelHistory = "Yes";
    this.feedback = "Healthy";
    this.feedbackDiscription = "";
  }
  submitSurvey(){
    console.log("Submit survey called");
    console.log(this.isTravelHistory)
    console.log(this.feedback)
    console.log(this.feedbackDiscription)
  }
  changeTravelHistory(e){
    this.isTravelHistory = e.target.value;
  }
  changeFeedback(e){
    this.feedback = e.target.value;
  }
}
