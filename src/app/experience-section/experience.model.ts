export class Experience {
  private _name: string;
  private _pictureUrl: string;
  private _liveView: string;
  private _title: string;
  private _client: string;
  private _clientLink: string;

  constructor(name: string, pictureUrl: string, liveView: string, title: string, client: string, clientLink: string) {
    this._name = name;
    this._pictureUrl = pictureUrl;
    this._liveView = liveView;
    this._title = title;
    this._client = client;
    this._clientLink = clientLink;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get pictureUrl(): string {
    return this._pictureUrl;
  }

  set pictureUrl(value: string) {
    this._pictureUrl = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get client(): string {
    return this._client;
  }

  set client(value: string) {
    this._client = value;
  }


  get clientLink(): string {
    return this._clientLink;
  }

  set clientLink(value: string) {
    this._clientLink = value;
  }


  get liveView(): string {
    return this._liveView;
  }

  set liveView(value: string) {
    this._liveView = value;
  }
}
