import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosAlgoTsComponent} from "./exos-algo-ts/exos-algo-ts.component";
import {SpotifishComponent} from "./spotifish/spotifish.component";
import {SpotifishPlaylistComponent} from "./spotifish-playlist/spotifish-playlist.component";

const routes: Routes = [
  { path: 'exos-ts', component: ExosAlgoTsComponent },
  { path: 'spotifish', component: SpotifishComponent },
  { path: 'spotifish/playlist', component: SpotifishPlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
