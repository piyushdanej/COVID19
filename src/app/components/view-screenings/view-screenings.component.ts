import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MainService } from "../../services/main.service";
import { Patient } from "../../interfaces/patient";

@Component({
  selector: "app-view-screenings",
  templateUrl: "./view-screenings.component.html",
  styleUrls: ["./view-screenings.component.css"],
})
export class ViewScreeningsComponent implements OnInit {
  tabIndexHighlight: number;
  patients: Patient[];

  healthDivisionFactor : number = 100/28;

  patientCategories = {
    Healthy: [],
    Ward: [],
    ICU: [],
    Pending: [],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService
  ) {
   
    console.log("ViewScreenings constructor");
    this.route.queryParams.subscribe((params) => {
     
      this.tabIndexHighlight = params["id"];
    });
  }

  ngOnInit() {
    this.mainService.getPatients().subscribe((data) => {
      this.patients = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Patient),
        } as Patient;

        // this.classifyPatients(this.patients);
      });
      this.classifyPatients(this.patients);
    });
  }

  classifyPatients(patients: Patient[]) {
    this.patients = patients.map((p) => {
      // if(p.surveryData){
      
      if (p.surveyData) {
        let keys = Object.keys(p.surveyData);

        let category = keys.reduce(
          (category, key) => {
            if (p.surveyData[key] == true) {
              category.count++;
            }
            return category;
          },
          { count: 0, label: "" }
        );

        if (category.count < 4) {

          category.label = "Healthy";
          p.healthPercent = this.healthDivisionFactor * category.count;
          this.patientCategories["Healthy"].push(p);
        } else if (category.count < 8) {
          
          category.label = "Pending";
          p.healthPercent = this.healthDivisionFactor * category.count;
          this.patientCategories["Pending"].push(p);
        } else if (category.count < 12) {
          category.label = "Ward";
          p.healthPercent = this.healthDivisionFactor * category.count;
          this.patientCategories["Ward"].push(p);
        } else {
          category.label = "ICU";
          p.healthPercent = this.healthDivisionFactor * category.count;
          this.patientCategories["ICU"].push(p);
        }
      } else {
        p.category = "Healthy";
        p.healthPercent = 0;
        this.patientCategories["Healthy"].push(p);
      }
      return p;
    });
    console.log(this.patientCategories);
  }

  selectPatient(patient) {
    this.mainService.setSelectedPatient(patient);
  }

  routeToProfile() {
    this.router.navigate(["/my-profile"], {queryParams: { path: "view-screenings" }});
    // routerLink="/my-profile"
  }
}
