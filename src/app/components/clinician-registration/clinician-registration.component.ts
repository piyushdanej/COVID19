import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MainService } from 'src/app/services/main.service';
import { Clinician } from 'src/app/interfaces/clinician';

@Component({
  selector: 'app-clinician-registration',
  templateUrl: './clinician-registration.component.html',
  styleUrls: ['./clinician-registration.component.css']
})
export class ClinicianRegistrationComponent implements OnInit {

  formData: Clinician;
  constructor(public service:MainService,public firestore:AngularFirestore , private router : Router) { }

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
      registrationNo:'',
      city:'',
      state:'',
      zipCode:'',
      mobile: '',
      email:'',
      password:''
    }
  }

  onSubmit(form:NgForm){
    let data=form.value;
    this.firestore.collection('clinicians').add(data);
    this.resetForm(form);

    this.router.navigate(["/clinician-home"]);
      
  }

}
