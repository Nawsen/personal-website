import {Component, OnInit} from '@angular/core';
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  private contactNavigation: Navigation;

  constructor() {
  }

  ngOnInit() {
    this.contactNavigation = Navigation.CONTACT;
  }

}
