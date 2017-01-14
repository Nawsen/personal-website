import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillBarComponent} from "./skill-bar/skill-bar.component";
import {SkillSectionComponent} from "./skill-section.component";

@NgModule({
  declarations: [
    SkillSectionComponent,
    SkillBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkillSectionComponent
  ]
})
export class SkillSectionModule { }
