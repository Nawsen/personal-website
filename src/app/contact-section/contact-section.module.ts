import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactSectionComponent} from "./contact-section.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {FooterComponent} from "./footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContactSectionComponent
  ],
  declarations: [
    ContactSectionComponent,
    ContactFormComponent,
    FooterComponent
  ]
})
export class ContactSectionModule { }
