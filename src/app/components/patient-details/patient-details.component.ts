import { MainService } from './../../services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {

  @ViewChildren("tab") tabs :QueryList<ElementRef>;
  meterList;
  constructor(private router : Router ,
              private route : ActivatedRoute ,
              private mainService : MainService,
              private firestore: AngularFirestore) { 
                this.meterList = Array(16).fill(1);
              }
  isTravelHistory:"Yes";
  feedback:"Healthy"
  feedbackDiscription;

  faArrowLeft = faArrowLeft;
  
  firstName = '';
  lastName = '';
  age = '';

  ngOnInit() {
    this.isTravelHistory = "Yes";
    this.feedback = "Healthy";
    this.feedbackDiscription = "";

    this.getAllPatients();

    this.firstName = this.route.snapshot.paramMap.get('firstName');
    this.lastName = this.route.snapshot.paramMap.get('lastName');
    this.age = this.route.snapshot.paramMap.get('age');

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
    this.router.navigate(["/screenings"] , { queryParams: { id: 0} , relativeTo : this.route});
  }
  
  selectTab(event){
    this.tabs.forEach(tab =>{
      tab.nativeElement.classList.remove('active-tab');
    })
    event.target.classList.add("active-tab");
    
  }

  getAllPatients(){
    // this.mainService.getAllPatients().subscribe(snapshot =>{
      
    //   snapshot.docs.forEach(doc => {

    //     console.log(doc.data());
    //   })
    // })
  }

}
