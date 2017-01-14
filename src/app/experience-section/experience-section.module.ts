import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceSectionComponent} from "./experience-section.component";
import {ExperienceComponent} from "./experience/experience.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    ExperienceSectionComponent
  ],
  declarations: [
    ExperienceSectionComponent,
    ExperienceComponent
  ]
})
export class ExperienceSectionModule { }
