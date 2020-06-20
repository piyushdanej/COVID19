import { ScreeningTabComponent } from "../screening-tab/screening-tab.component";
import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ContentChild,
  ElementRef,
} from "@angular/core";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Content } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "tab-list",
  templateUrl: "./tab-list.component.html",
  styleUrls: ["./tab-list.component.css"],
})
export class TabListComponent implements OnInit {
  @ContentChildren(ScreeningTabComponent) tabs: QueryList<
    ScreeningTabComponent
  >;

  @ContentChildren(ScreeningTabComponent, { read: ElementRef })
  elTabs: QueryList<ElementRef>;
  selectedTabIndex: number = 0;

  faArrowLeft = faArrowLeft;
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}

  selectTab(tab: ScreeningTabComponent) {
    this.tabs.forEach((singleTab, index) => {
      singleTab.isActive = false;
      if (singleTab == tab) {
        this.selectedTabIndex = index;
      }
    });

    tab.isActive = true;
  }

  navigateBack(){
    
  }
}
