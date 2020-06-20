import { Component, OnInit } from '@angular/core';
import { faChevronRight, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinician-home',
  templateUrl: './clinician-home.component.html',
  styleUrls: ['./clinician-home.component.css']
})
export class ClinicianHomeComponent implements OnInit {

  faChevronRight = faChevronRight;
  faUser = faUser;
  faCog = faCog;

  constructor() { }

  ngOnInit() {
  }

}
