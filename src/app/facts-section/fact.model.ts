export class Fact {
  private _name: string;
  private _number: number;
  private _icon: string;

  constructor(name: string, number: number, icon: string) {
    this._name = name;
    this._number = number;
    this._icon = icon;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
