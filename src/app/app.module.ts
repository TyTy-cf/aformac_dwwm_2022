import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExosAlgoTsComponent } from './exos-algo-ts/exos-algo-ts.component';
import { SpotifishComponent } from './spotifish/spotifish.component';
import { SpotifishPlaylistComponent } from './spotifish-playlist/spotifish-playlist.component';
import { SpotifishUserComponent } from './spotifish-user/spotifish-user.component';
import { SpotifishArtistComponent } from './spotifish-artist/spotifish-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    ExosAlgoTsComponent,
    SpotifishComponent,
    SpotifishPlaylistComponent,
    SpotifishUserComponent,
    SpotifishArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
