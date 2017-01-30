/**
 * Created by Wannes on 15/01/2017.
 */

export class Section {
  private _id: string;
  private _name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

export enum Navigation {
  HOME = <any>new Section('home', 'Home'),
  ABOUT = <any>new Section('about', 'About'),
  SKILL = <any>new Section('skill', 'Skill'),
  EXPERIENCE = <any>new Section('experience', 'Experience'),
  CONTACT = <any>new Section('contact', 'Contact')
}
