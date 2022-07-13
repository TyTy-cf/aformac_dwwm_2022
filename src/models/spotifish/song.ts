export class Song {

  constructor(
    private _name: string,
    private _duration: number
  ) {
  }

  get name(): string {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }

}
