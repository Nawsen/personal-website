/**
 * Created by Wannes on 15/01/2017.
 */

export class Section {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export enum Navigation {
  HOME = <any>new Section('#home', 'Home'),
  ABOUT = <any>new Section('#about', 'About'),
  SKILL = <any>new Section('#skill', 'Skill'),
  EXPERIENCE = <any>new Section('#experience', 'Experience'),
  CONTACT = <any>new Section('#contact', 'Contact')
}
