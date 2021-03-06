
export class Dice {

  private _value: number = 1;
  private readonly _image: string = '';

  constructor() {
    this._value = Math.floor(Math.random() * 6) + 1;
    this._image = 'assets/dices/' + this._value + '.png';
  }

  get value(): number {
    return this._value;
  }

  get image(): string {
    return this._image;
  }

  reroll(): void {
    this._value = Math.floor(Math.random() * 6) + 1;
  }

}
