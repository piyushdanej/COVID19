import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-screenings',
  templateUrl: './view-screenings.component.html',
  styleUrls: ['./view-screenings.component.css']
})
export class ViewScreeningsComponent implements OnInit {
  tabIndexHighlight : number

  constructor(private route : ActivatedRoute) {
    debugger; 
    console.log("ViewScreenings constructor")
    this.route.queryParams.subscribe(params =>{
      debugger;
      this.tabIndexHighlight = params["id"]
    })
  }

  ngOnInit() {
   
  }

}
