import {Component, OnInit} from '@angular/core';
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  private homeNavigation: Navigation;

  constructor() {
  }

  ngOnInit() {
    this.homeNavigation = Navigation.HOME;
  }

}
