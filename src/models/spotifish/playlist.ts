import {User} from "./user";
import {Song} from "./song";

export class Playlist {

  private _songs: Song[] = [];
  private _createdAt: Date = new Date();
  private _updatedAt: Date = new Date();

  constructor(
    private _name: string,
    private _creator: User,
    private _visibility: boolean
  ) { }

  get name(): string {
    return this._name;
  }

  get creator(): User {
    return this._creator;
  }

  get songs(): Song[] {
    return this._songs;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get visibility(): boolean {
    return this._visibility;
  }

  addSong(song: Song): boolean {
    if (!this._songs.includes(song)) {
      this._songs.push(song);
      this._updatedAt = new Date();
      return true;
    }
    return false;
  }

}

