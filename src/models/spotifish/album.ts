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

  getTotalTime(): number {
    let totalTime: number = 0;
    for (const song of this._songsAlbum) {
      totalTime += song.duration;
    }
    return totalTime;
  }

}
