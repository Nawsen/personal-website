import { Component, OnInit } from '@angular/core';
import {Navigation, Section} from "../shared/navigation.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private about: Navigation;
  private skills: Navigation;
  private experience: Navigation;
  private contact: Navigation;

  constructor() { }

  ngOnInit() {
    //load all sections from Navigation enum
    this.about = Navigation.ABOUT;
    this.skills = Navigation.SKILL;
    this.experience = Navigation.EXPERIENCE;
    this.contact = Navigation.CONTACT;
  }

}
