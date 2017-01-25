import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutSectionComponent} from "./about-section.component";
import {TechnologiesComponent} from "./technologies/technologies.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AboutSectionComponent
  ],
  declarations: [
    AboutSectionComponent,
    TechnologiesComponent
  ]
})
export class AboutSectionModule { }
