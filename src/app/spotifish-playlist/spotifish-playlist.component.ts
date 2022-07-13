import { Component } from '@angular/core';
import {Playlist} from "../../models/spotifish/playlist";
import {User} from "../../models/spotifish/user";
import {Song} from "../../models/spotifish/song";
import {TimeService} from "../../services/time.service";

@Component({
  selector: 'app-spotifish-playlist',
  templateUrl: './spotifish-playlist.component.html',
  styleUrls: ['./spotifish-playlist.component.scss']
})
export class SpotifishPlaylistComponent {

  playlist: Playlist;

  // Injection de dépendance du Service "TimeService"
  // On effectue l'injection de dépendance UNIQUEMENT dans un constructeur de component ou de service

  // Cela fonctionne car TimeService a la décoration @Injectable (ajoutée automatiquement lorsque l'on fait un
  // ng g s nomService (ng generate service nomService)
  // Voir la classe TimeService
  constructor(
    private _timeService: TimeService
  ) {
    let birthDateToto: Date = new Date();
    birthDateToto.setFullYear(2000);

    let user: User = new User(
      'toto@gmail.com',
      'ZuperToto',
      birthDateToto
    );
    user.firstName = 'Toto';

    const song: Song = new Song(
      'Triste mais vrai',
      328
    );
    this.playlist = new Playlist(
      'Zuper playlist',
      user,
      true
    );
    this.playlist.addSong(song);
  }

  addSong(): void {
    const song2: Song = new Song(
      'Chevauche la foudre',
      397
    );
    this.playlist.addSong(song2);
  }

  rename(): void {
    this.playlist.name = 'Another Playlist Name';
  }

  getTimeToString(time: number): string {
    return this._timeService.getTimeFromSeconds(time);
  }

}
