import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-to-call',
  templateUrl: './patient-to-call.component.html',
  styleUrls: ['./patient-to-call.component.css']
})
export class PatientToCallComponent implements OnInit {
  @Input() patientName : string;
  @Input() patientDate : string;


  constructor() { }

  ngOnInit() {
  }

}
