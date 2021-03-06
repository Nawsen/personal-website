import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SkillSectionModule} from "./skill-section/skill-section.module";
import {AboutSectionModule} from "./about-section/about-section.module";
import {HomeSectionModule} from "./home-section/home-section.module";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {ExperienceSectionModule} from "./experience-section/experience-section.module";
import {FactsSectionModule} from "./facts-section/facts-section.module";
import {ContactSectionModule} from "./contact-section/contact-section.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutSectionModule,
    HomeSectionModule,
    NavBarModule,
    SkillSectionModule,
    ExperienceSectionModule,
    FactsSectionModule,
    ContactSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
