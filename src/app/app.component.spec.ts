///<reference path="../../node_modules/@angular/platform-browser/src/browser.d.ts"/>
/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AboutSectionModule} from "./about-section/about-section.module";
import {HomeSectionModule} from "./home-section/home-section.module";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {SkillSectionModule} from "./skill-section/skill-section.module";
import {ExperienceSectionModule} from "./experience-section/experience-section.module";
import {FactsSectionModule} from "./facts-section/facts-section.module";
import {ContactSectionModule} from "./contact-section/contact-section.module";

var compiledApp;

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        AboutSectionModule,
        HomeSectionModule,
        NavBarModule,
        SkillSectionModule,
        ExperienceSectionModule,
        FactsSectionModule,
        ContactSectionModule
      ]
    });
    TestBed.compileComponents();
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    compiledApp = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(compiledApp).toBeTruthy();
  }));

  it('should render Navbar', async(() => {
    expect(compiledApp.querySelector('app-nav-bar')).toBeTruthy();
  }));

  it('should render about', async(()=> {
    expect(compiledApp.querySelector('app-about-section')).toBeTruthy();
  }));

  it('should render contact', async(()=> {
    expect(compiledApp.querySelector('app-contact-section')).toBeTruthy();
  }));

  it('should render experience', async(()=> {
    expect(compiledApp.querySelector('app-experience-section')).toBeTruthy();
  }));

  it('should render facts', async(()=> {
    expect(compiledApp.querySelector('app-facts-section')).toBeTruthy();
  }));

  it('should render home', async(()=> {
    expect(compiledApp.querySelector('app-home-section')).toBeTruthy();
  }));

  it('should render skill', async(()=> {
    expect(compiledApp.querySelector('app-skill-section')).toBeTruthy();
  }));

});
