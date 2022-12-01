import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosAlgoTsComponent} from "./exos-algo-ts/exos-algo-ts.component";
import {SpotifishComponent} from "./spotifish/spotifish.component";
import {PokedexComponent} from "./pokedex/pokedex.component";
import {SpotifishPlaylistComponent} from "./spotifish-playlist/spotifish-playlist.component";
import {SpotifishUserComponent} from "./spotifish-user/spotifish-user.component";
import {SpotifishArtistComponent} from "./spotifish-artist/spotifish-artist.component";
import {DigidexComponent} from "./digidex/digidex.component";
import {AccountComponent} from "./account/account.component";
import {JwtConnexionComponent} from "./jwt-connexion/jwt-connexion.component";

const routes: Routes = [
  { path: 'spotifish/login', component: JwtConnexionComponent },
  { path: 'exos-ts', component: ExosAlgoTsComponent },
  { path: 'spotifish', component: SpotifishComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'spotifish/playlist', component: SpotifishPlaylistComponent },
  { path: 'spotifish/user', component: SpotifishUserComponent },
  { path: 'spotifish/artist', component: SpotifishArtistComponent },
  { path: 'digidex', component: DigidexComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
