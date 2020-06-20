import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  faCoffee = faCoffee;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
