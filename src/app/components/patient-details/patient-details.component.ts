import { surveyQuestion } from "./../../interfaces/surveyQuestion";
import { MainService } from "./../../services/main.service";
import { Router, ActivatedRoute } from "@angular/router";

import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  OnDestroy,
  ChangeDetectorRef,
  NgZone,
  ChangeDetectionStrategy,
} from "@angular/core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Patient } from "src/app/interfaces/patient";
import { Subscription } from "rxjs";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  @ViewChildren("tab") tabs: QueryList<ElementRef>;
  meterList;

  patientDetails: any = { firstName: "hello" };
  firstName: string = "hello";
  lastName: string = "";
  patientDetailsSubscription: Subscription;

  healthScore: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    this.meterList = Array(16).fill(1);
  }
  isTravelHistory: "Yes";
  feedback: "Healthy";
  feedbackDiscription;

  faArrowLeft = faArrowLeft;

  ngOnInit() {
    this.isTravelHistory = "Yes";
    this.feedback = "Healthy";
    this.feedbackDiscription = "";

    this.route.queryParams.subscribe((params) => {
      let path = params["path"];
      if (path == "home") {
        this.patientDetails = this.mainService.getLoggedInPatient();
        this.healthScore = this.getHealthScore(this.patientDetails);
      } else if (path == "view-screenings") {
        this.mainService.getSelectedPatient().subscribe((data) => {
          this.patientDetails = data;
          console.log("Patient details : ", this.firstName);

          this.healthScore = this.getHealthScore(this.patientDetails);
        });
      }
    });
    // this.mainService.getSelectedPatient().subscribe((data) => {
    //   this.patientDetails = data;
    //   console.log("Patient details : ", this.firstName);
    //   debugger;
    //   this.healthScore = Object.keys(this.patientDetails.surveyData).length || 0;
    // });
  }

  getHealthScore(patientDetails): number {
    if (patientDetails.surveyData) {
      let sum2 =  Object.keys(this.patientDetails.surveyData).reduce((sum, key) => {
        console.log(sum);
        if( this.patientDetails.surveyData[key] === true)
          sum = sum+1;
        return sum;
      }, 0);
      console.log("Sum 2 : " , sum2);
      return sum2;
    } 
    else return 0;
  }

  submitSurvey() {
    console.log("Submit survey called");
    console.log(this.isTravelHistory);
    console.log(this.feedback);
    console.log(this.feedbackDiscription);
  }
  changeTravelHistory(e) {
    this.isTravelHistory = e.target.value;
  }
  changeFeedback(e) {
    this.feedback = e.target.value;
  }
  navigateBack() {
    this.router.navigate(["/screenings"], {
      queryParams: { id: 0 },
      relativeTo: this.route,
    });
  }

  selectTab(event) {
    this.tabs.forEach((tab) => {
      tab.nativeElement.classList.remove("active-tab");
    });
    event.target.classList.add("active-tab");
  }

  getAllPatients() {}

  ngOnDestroy() {
    // this.patientDetailsSubscription.unsubscribe();
  }
}
