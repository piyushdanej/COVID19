import { Router } from '@angular/router';
import { surveyQuestion } from './../../interfaces/surveyQuestion';
import { QuestionComponent } from './question/question.component';
import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import{MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {

  dataQA = {};
  tabId : number = 1;
  isShow:boolean = true;
  isShow1:boolean = true;
  isShow2:boolean = true;
  isShow3:boolean = true;
  showSurvey : boolean = false;
  showModal: boolean ;
  showQue:boolean = false;
  @ViewChild("modal")  modalControl : ElementRef;
  @ViewChildren('tab') elTabs : QueryList<ElementRef>;
  disableQue: boolean = false;



  constructor(private router : Router ,private mainService : MainService) { }

  questionsForTab1 : string[] = [
    "I share the same house with a person infected with the virus or is a member of my family",
    "You have been in the same closed space for more than 20 minutes with an infected person (Such as house, joint residential unit, work place, class room, vehicle or plane)",
    "You have been face-to-face  with a person infected with the virus for more than 20 minutes , less than 1.5 meters away from each other",
    "I have medical history like Diabetes , Heart problems ,  blood pressure1You have touched or been exposed to the respiratory secretions of an infected person.",
    "I am working in a health facility where I have contacted a positive case without protection ( neither he nor I were wearing masks)",
    "You have been face-to-face with a person infected with the virus, less (more) than 1.5 meters away from each other.",
    "You have been  in the same closed space for less than 20 minutes with an infected person (Such as house, same residential unit, work place, class room or vehicle)"
]

questionsForTab2: string[] = [
  "I have been outside the Kingdom during the past 14 days",
  "I leave my house and interact with people a lot",
  "I am not a health practitioner  and have visited a health facility (Clinic, hospital, inpatient, waiting area)",
  "I am a health practitioner or working in a health facility or providing services to patients and following required preventive measures."
]

questionsForTab3: string[] = [
  "High fever",
   "Cough (First time or more than usual)",
   "Sore throat",
   " Shortness of breath (First time or more than usual)" ,
    "Tremors and body pain (First time)",
    "Cough (First time or more than usual) ",
     "Cognitive disorder (First time especially the elderly)" 
]

questionsForTab4: string[] = [
  "Asthma",
  "Chronic lung diseases",
  "Kidney failure",
  "Heart diseases",
   "Diabetes",
  "Hypertension",
  "Cancer and tumors",
  "Immunodeficiency",
   "Taking Immunosuppressive drug",
  "Taking pain reliever or fever reducer on a daily basis",
   "My age is over 60",
  "Obesity with body mass index 40 or higher"
]
 
  loopArray : number[] = [1,2,3,4,5,6,7];
  ngOnInit(): void {
  }

  selectTab(event , id: number) {
    this.tabId = id;
    this.isShow =false; 
    if(id==3){
      this.isShow1 = false;
    }
    if(id==4){
      this.isShow2 = false;
    }
     
    this.elTabs.forEach(tab => tab.nativeElement.classList.remove("active-tab"))
    
    event.target.classList.add("active-tab");
  } 
  addData(event){
    this.dataQA[event.question] = event.answer;
  }
  submitData(){
    // send data to db
    this.showModal = true;
    console.log(this.showModal);
    console.log(this.dataQA);
    const qaDataObj = {surveyData : this.dataQA}
    // this.mainService.updatePatientByMobileNumber("333333" , qaDataObj);
    
    
    this.modalControl.nativeElement.classList.remove("display-none")
    let userId = this.mainService.getLoggedInPatient().mobileNumber;
    this.mainService.updatePatientByMobileNumber(userId , qaDataObj);
  }
  navigateBack(){
    this.router.navigate(["/patient-home"] );
  }
  closeModal(){
    this.showModal = false;
    this.modalControl.nativeElement.classList.add("display-none");
    this.router.navigate(["/patient-home"] );
  }

  ChangeVisiblity(e){
    if(e.target.value =="Yes"){
      this.showQue = true;

      
    }else{  
      this.showQue = false;
      
    }    
  }
}
