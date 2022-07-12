import {User} from "./user";
import {Song} from "./song";

export class Playlist {

  private _songsArray: Song[] = [];
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
    return this._songsArray;
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
    if (!this._songsArray.includes(song)) {
      this._songsArray.push(song);
      this._updatedAt = new Date();
      return true;
    }
    return false;
  }

  getTotalTime(): string {
    let totalTime: number = 0;
    for (const song of this._songsArray) {
      totalTime += song.duration;
    }

    if (totalTime === 0) return '';

    const sec: number = totalTime % 60;
    const min: number = Math.floor(totalTime / 60);
    const minStr: string = min < 10 ? '0' + min : min.toString();
    const secStr: string = sec < 10 ? '0' + sec : sec.toString();
    return minStr + ':' + secStr;
  }

}

