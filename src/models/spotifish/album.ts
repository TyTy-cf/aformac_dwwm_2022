import {Song} from "./song";
import {Artist} from "./artist";

export class Album {

  private _songsAlbum: Song[] = [];

  constructor(
    private _artist: Artist,
    private _name: string,
    private _publishedAt: Date,
    private _explicitContent: boolean
  ) { }

  get songsAlbum(): Song[] {
    return this._songsAlbum;
  }

  get artist(): Artist {
    return this._artist;
  }

  get name(): string {
    return this._name;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  get explicitContent(): boolean {
    return this._explicitContent;
  }

  addSong(song: Song): boolean {
    if (!this._songsAlbum.includes(song)) {
      this._songsAlbum.push(song);
      return true;
    }
    return false;
  }

  removeSong(index: number): void {
    this._songsAlbum = this._songsAlbum.filter(
      (song, indexTmpSong) => index !== indexTmpSong
    );
  }

  getTotalTime(): string {
    let totalTime: number = 0;
    for (const song of this._songsAlbum) {
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
