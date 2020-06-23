import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MainService } from 'src/app/services/main.service';
import { Clinician } from 'src/app/interfaces/clinician';

@Component({
  selector: 'app-clinician-registration',
  templateUrl: './clinician-registration.component.html',
  styleUrls: ['./clinician-registration.component.css']
})
export class ClinicianRegistrationComponent implements OnInit {

  clinicians: Clinician[];
  insertForm: FormGroup;

  states: any=["Alabama", 
  "Alaska", 
  "Arizona", 
  "Arkansas", 
  "California", 
  "Colorado", 
  "Connecticut", 
  "Delaware", 
  "Florida", 
  "Georgia", 
  "Hawaii", 
  "Idaho", 
  "IllinoisIndiana", 
  "Iowa", 
  "Kansas", 
  "Kentucky", 
  "Louisiana", 
  "Maine", 
  "Maryland", 
  "Massachusetts", 
  "Michigan", 
  "Minnesota", 
  "Mississippi", 
  "Missouri", 
  "MontanaNebraska", 
  "Nevada", 
  "New Hampshire", 
  "New Jersey", 
  "New Mexico", 
  "New York", 
  "North Carolina", 
  "North Dakota", 
  "Ohio", 
  "Oklahoma", 
  "Oregon", 
  "PennsylvaniaRhode Island", 
  "South Carolina", 
  "South Dakota", 
  "Tennessee", 
  "Texas", 
  "Utah", 
  "Vermont", 
  "Virginia", 
  "Washington", 
  "West Virginia", 
  "Wisconsin", 
  "Wyoming"];

  tempState='California';

  constructor(private mainService: MainService, private formBuilder: FormBuilder, public firestore:AngularFirestore , private router : Router) { }

  ngOnInit(): void {
    this.insertForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['California', Validators.required],
      registrationNo: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobileNumber: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      userType : ['clinician']
    });
  }

  get formControls() { 
    console.log(this.insertForm.controls)
    return this.insertForm.controls; 
  }

  onSubmit(){
    this.mainService.createClinician(this.insertForm.value).then( data => {
      debugger;
      console.log(data);
      if(this.insertForm.invalid){
        return;
      }
      this.router.navigate(["/clinician-home"]);
    });
  }

}
