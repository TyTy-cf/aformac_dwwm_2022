import { Component } from '@angular/core';
import {User} from "../../models/spotifish/user";
import {Playlist} from "../../models/spotifish/playlist";
import {Artist} from "../../models/spotifish/artist";
import {Album} from "../../models/spotifish/album";
import {Song} from "../../models/spotifish/song";
import {TimeService} from "../../services/time.service";

@Component({
  selector: 'app-spotifish-artist',
  templateUrl: './spotifish-artist.component.html',
  styleUrls: ['./spotifish-artist.component.scss']
})
export class SpotifishArtistComponent {

  private _artist: Artist = new Artist('Metallica');
  private _arrayAlbumArtists: Album[] = [];

  constructor(
    public timeService: TimeService
  ) {
    let album: Album = new Album(this._artist, 'Chevauche la foudre', new Date(), false);
    album.addSong(new Song('Triste mais vrai',328));
    album.addSong(new Song('Chevauche la foudre',397));

    let album1: Album = new Album(this._artist, 'Saint Anger', new Date(), true);
    album1.addSong(new Song('Frantic',316));

    this._arrayAlbumArtists.push(album, album1);
  }

  get arrayAlbumArtists(): Album[] {
    return this._arrayAlbumArtists;
  }

  get artist(): Artist {
    return this._artist;
  }

}
