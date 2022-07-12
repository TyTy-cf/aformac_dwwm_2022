
export class Artist {

  private _activeYear: number|undefined;
  private _country: string|undefined;

  constructor(
    private _name: string
  ) { }

  get name(): string {
    return this._name;
  }

  get activeYear(): number|undefined {
    return this._activeYear;
  }

  get country(): string|undefined {
    return this._country;
  }
}
