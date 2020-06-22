import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { surveyQuestion } from './../../interfaces/surveyQuestion';
import { QuestionComponent } from './question/question.component';
import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';


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
  showModal: boolean ;
  showQue:boolean = false;
  @ViewChild("modal" , {static : false})  modalControl : ElementRef;
  @ViewChildren('tab') elTabs : QueryList<ElementRef>;



  constructor(private router : Router , private mainService : MainService) { }

  questionsForTab1 : string[] = [
    "I share the same house with a person infected with the virus or is member of my family.1",
    "I have a travel history within the last month1",
    "I have fever or symptoms like headache , dry cough , body ache .1",
    "I have medical history like Diabetes , Heart problems ,  blood pressure1"
]

questionsForTab2: string[] = [
  "I share the same house with a person infected with the virus or is member of my family.2",
  "I have a travel history within the last month2",
  "I have fever or symptoms like headache , dry cough , body ache .2",
  "I have medical history like Diabetes , Heart problems ,  blood pressure2"
]

questionsForTab3: string[] = [
  "I share the same house with a person infected with the virus or is member of my family.3",
  "I have a travel history within the last month3",
  "I have fever or symptoms like headache , dry cough , body ache .3",
  "I have medical history like Diabetes , Heart problems ,  blood pressure3"
]

questionsForTab4: string[] = [
  "I share the same house with a person infected with the virus or is member of my family.4",
  "I have a travel history within the last month4",
  "I have fever or symptoms like headache , dry cough , body ache .4",
  "I have medical history like Diabetes , Heart problems ,  blood pressure4"
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
    let userId = this.mainService.getLoggedInPatient().mobileNumber;
    this.mainService.updatePatientByMobileNumber(userId , qaDataObj);
    this.modalControl.nativeElement.classList.remove("display-none")
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
