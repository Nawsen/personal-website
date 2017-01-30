import {Component, OnInit} from '@angular/core';
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  private aboutNavigation: Navigation;

  constructor() {
  }

  ngOnInit() {
    this.aboutNavigation = Navigation.ABOUT;
  }

}
