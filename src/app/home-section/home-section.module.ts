import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeSectionComponent} from "./home-section.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    HomeSectionComponent
  ],
  declarations: [
    HomeSectionComponent
  ]
})
export class HomeSectionModule { }
