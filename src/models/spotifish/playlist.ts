import {User} from "./user";
import {Song} from "./song";

export class Playlist {

  private _arraySongsPlaylist: Song[] = [];
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

  set name(value: string) {
    this._name = value;
    this._updatedAt = new Date();
  }

  get creator(): User {
    return this._creator;
  }

  get arraySongsPlaylist(): Song[] {
    return this._arraySongsPlaylist;
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

  set visibility(value: boolean) {
    this._visibility = value;
    this._updatedAt = new Date();
  }

  addSong(song: Song): boolean {
    if (!this._arraySongsPlaylist.includes(song)) {
      this._arraySongsPlaylist.push(song);
      this._updatedAt = new Date();
      return true;
    }
    return false;
  }

  removeSong(index: number): void {
    this._arraySongsPlaylist = this._arraySongsPlaylist.filter(
      (song, indexTmpSong) => index !== indexTmpSong
    );
  }

  getTotalTime(): string {
    let totalTime: number = 0;
    for (const song of this._arraySongsPlaylist) {
      totalTime += song.duration;
    }

    if (totalTime === 0) return '00:00';

    const sec: number = totalTime % 60;
    const min: number = Math.floor(totalTime / 60);
    const minStr: string = min < 10 ? '0' + min : min.toString();
    const secStr: string = sec < 10 ? '0' + sec : sec.toString();
    return minStr + ':' + secStr;
  }

}

