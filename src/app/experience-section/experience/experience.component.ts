import {Component, OnInit, Input} from '@angular/core';
import {Experience} from "../experience.model";

@Component({
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() public experience :Experience;

  constructor() { }

  ngOnInit() {
    console.log(this.experience);
  }

}
