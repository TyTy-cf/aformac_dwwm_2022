import { Component } from '@angular/core';
import {Song} from "../../models/spotifish/song";
import {User} from "../../models/spotifish/user";
import {Playlist} from "../../models/spotifish/playlist";

@Component({
  selector: 'app-spotifish',
  templateUrl: './spotifish.component.html',
  styleUrls: ['./spotifish.component.scss']
})
export class SpotifishComponent {

  constructor() {
    const song: Song = new Song(
      'Triste mais vrai',
      328
    );
    console.log(song.getTime());

    let birthDateToto: Date = new Date();
    birthDateToto.setFullYear(2000);

    let user: User = new User(
      'toto@gmail.com',
      'ZuperToto',
      birthDateToto
    );
    user.firstName = 'Toto';

    let playlist: Playlist = new Playlist(
      'Zuper playlist',
      user,
      true
    );
    console.log(playlist);
  }

}
