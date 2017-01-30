import {Component, OnInit} from '@angular/core';
import {Skill} from "./skill.model";
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  private skills: Skill[] = [];

  private skillNavigation: Navigation;

  constructor() {
  }


  ngOnInit() {
    this.skillNavigation = Navigation.SKILL;

    this.skills.push(new Skill("Java", 80));
    this.skills.push(new Skill("HTML", 90));
    this.skills.push(new Skill("CSS", 80));
    this.skills.push(new Skill("Javascript", 70));
    this.skills.push(new Skill("Angular", 60));
    this.skills.push(new Skill("NodeJS", 50));
    this.skills.push(new Skill("Docker", 30));
  }

}
