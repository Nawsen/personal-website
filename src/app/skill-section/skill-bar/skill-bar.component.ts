import {Component, OnInit, Input} from '@angular/core';
import {Skill} from "../skill.model";

@Component({
  selector: 'app-skill-bar',
  templateUrl: 'skill-bar.component.html',
  styleUrls: ['skill-bar.component.css']
})
export class SkillBarComponent implements OnInit {

  @Input() public skill: Skill;

  constructor() {
  }

  ngOnInit() {
  }

}
