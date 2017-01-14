import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FactsSectionComponent} from "./facts-section.component";
import {FactComponent} from "./fact/fact.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FactsSectionComponent
  ],
  declarations: [
    FactsSectionComponent,
    FactComponent
  ]
})
export class FactsSectionModule { }
