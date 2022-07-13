import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosAlgoTsComponent} from "./exos-algo-ts/exos-algo-ts.component";
import {SpotifishComponent} from "./spotifish/spotifish.component";
import {SpotifishPlaylistComponent} from "./spotifish-playlist/spotifish-playlist.component";
import {SpotifishUserComponent} from "./spotifish-user/spotifish-user.component";
import {SpotifishArtistComponent} from "./spotifish-artist/spotifish-artist.component";

const routes: Routes = [
  { path: 'exos-ts', component: ExosAlgoTsComponent },
  { path: 'spotifish', component: SpotifishComponent },
  { path: 'spotifish/playlist', component: SpotifishPlaylistComponent },
  { path: 'spotifish/user', component: SpotifishUserComponent },
  { path: 'spotifish/artist', component: SpotifishArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
