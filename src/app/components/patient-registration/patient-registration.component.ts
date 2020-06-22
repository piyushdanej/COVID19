import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { MainService } from "src/app/services/main.service";
import { Patient } from "src/app/interfaces/patient";

@Component({
  selector: "app-patient-registration",
  templateUrl: "./patient-registration.component.html",
  styleUrls: ["./patient-registration.component.css"],
})
export class PatientRegistrationComponent implements OnInit {
  options = "As patient";

  patients: Patient[];
  insertForm: FormGroup;

  constructor(
    private mainService: MainService, 
    private formBuilder: FormBuilder,
    public firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.insertForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      familyMemberAge: ['', Validators.required],
      relation: ['', Validators.required], 
      userType : ['patient']
    });
  }

  get formControls() { 
    console.log(this.insertForm.controls)
    return this.insertForm.controls; 
  }
  

  onSubmit(){
    this.mainService.createPatient(this.insertForm.value).then( data => {
      if(this.insertForm.invalid){
        return;
      }
      this.router.navigate(["/patient-home"]);
    });
  }
}
