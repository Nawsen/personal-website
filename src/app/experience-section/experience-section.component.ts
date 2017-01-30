import {Component, OnInit} from '@angular/core';
import {Experience} from "./experience.model";
import {Navigation} from "../shared/navigation.model";

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  private experiences: Experience[] = [];

  private experienceNavigation: Navigation;

  constructor() {
  }

  ngOnInit() {
    this.experienceNavigation = Navigation.EXPERIENCE;

    this.experiences.push(new Experience('Authentication System for Actors (SAA)', 'assets/img/portfolio/SAA.png', 'https://wwwacc.vas.ehealth.fgov.be/websaa/', 'Developer', 'Smals', 'https://www.smals.be/nl'));
    //this.experiences.push(new Experience('Source of activities and classes (SANAC)', 'assets/img/portfolio/krinkel.png', 'https://wwwacc.vas.ehealth.fgov.be/websanac/', 'Developer', 'Smals', 'https://www.smals.be/nl'));
    this.experiences.push(new Experience('Krinkel online registration platform', 'assets/img/portfolio/krinkel.png', 'https://www.krinkel.be/', 'Developer/Designer', 'Chiro', 'https://chiro.be/'));
    this.experiences.push(new Experience('Notification platform for paramotor terrains', 'assets/img/portfolio/notifi_paramo.png', 'https://es.mobilit.fgov.be/paramotor-client/#/', 'Developer', 'FOD Mobility', 'http://mobilit.belgium.be/fr'));
    this.experiences.push(new Experience('Creawall', 'assets/img/portfolio/creawall.png', 'http://creawall.be', 'Developer', 'Creawall', 'http://creawall.be'));
    this.experiences.push(new Experience('Creatura', 'assets/img/portfolio/creatura.png', 'http://creatura.be', 'Developer', 'Creatura', 'http://creatura.be'));
    this.experiences.push(new Experience('Bal der Bals event website 2017', 'assets/img/portfolio/balderbals2017.png', 'https://balderbals.be/', 'Developer/Designer', 'Bal der Bals vzw', 'https://balderbals.be/'));
    this.experiences.push(new Experience('Bal der Bals event website 2016', 'assets/img/portfolio/balderbals2016.png', 'https://balderbals.be/', 'Developer/Designer', 'Bal der Bals vzw', 'https://balderbals.be/'));
    this.experiences.push(new Experience('Bal der Bals event website 2015', 'assets/img/portfolio/balderbals2015.png', 'https://balderbals.be/', 'Developer/Designer', 'Bal der Bals vzw', 'https://balderbals.be/'));
    this.experiences.push(new Experience('Easy Vegan, Web & Android app', 'assets/img/social-icons/github.svg', 'https://github.com/Nawsen/EVA-Project-Groep-15', 'Developer/Designer', 'EVA vzw', 'http://www.evavzw.be/'));
    this.experiences.push(new Experience('JavaFX application to manage a library', 'assets/img/social-icons/github.svg', 'https://github.com/Nawsen/git-mediatheek', 'Developer', 'De Krekelschool', 'http://www.vbsdekrekel.be/'));
    this.experiences.push(new Experience('Breakout Game for IOS course (SWIFT)', 'assets/img/social-icons/github.svg', 'https://github.com/Nawsen/iosbreakoutproject', 'Developer', 'HoGent', 'https://www.hogent.be/'));
    this.experiences.push(new Experience('Reddit remake for a web application course', 'assets/img/social-icons/github.svg', 'https://github.com/Nawsen/angular-express-project', 'Developer', 'HoGent', 'https://www.hogent.be/'));
  }


}
