import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { faArrowLeft , faComment } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  @ViewChildren("tab") tabs :QueryList<ElementRef>;

  constructor(private router : Router ,
              private route : ActivatedRoute) { }
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
  navigateBack(){
    this.router.navigate(["/patient-home"] , {relativeTo : this.route})
  }
  
  selectTab(event){
    this.tabs.forEach(tab =>{
      tab.nativeElement.classList.remove('active-tab');
    })
    event.target.classList.add("active-tab");
    
  }
}
