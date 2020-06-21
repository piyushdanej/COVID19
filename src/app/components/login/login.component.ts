import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  password : string;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submitCredentials(){
    if(this.userName == "patient")
      this.router.navigate(["/patient-home"]);
    if(this.userName =="clinician")
      this.router.navigate(["/clinician-home"]);

  }
  routeToRegistration(){
    this.router.navigate(["/patient-registration"])
  }


}
