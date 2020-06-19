import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
