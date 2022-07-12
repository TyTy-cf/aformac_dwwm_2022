
export class User {

  private _firstName: string = '';
  private _lastName: string = '';
  private _profilePicture: string = '';

  constructor(
    private _email: string,
    private _nickname: string,
    private _birthDate: Date
  ) {
    // this._email = email;
    // this._nickname = nickname;
    // this._birthDate = birthDate;
  }

  get email(): string {
    return this._email;
  }

  get nickname(): string {
    return this._nickname;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get profilePicture(): string {
    return this._profilePicture;
  }

  set profilePicture(value: string) {
    this._profilePicture = value;
  }

}
