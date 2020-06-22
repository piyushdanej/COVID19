import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm, FormGroup } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { Patient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  options='As patient';

  formData:Patient;

  constructor(public service:MainService,public firestore:AngularFirestore) { }

  ngOnInit(): void {

    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.formData={
      id:null,
      firstName:'',
      lastName:'',
      city:'',
      state:'',
      zipCode:'',
      mobileNumber:'',
      emailId:'',
      age:null,
      sex:'',
      password:'',
      confirmPass:''
    }
  }
 

  onSubmit(form:NgForm){
    let data=form.value;
    
    this.firestore.collection('patients').add(data);
    // this.resetForm(form);
  }



}
