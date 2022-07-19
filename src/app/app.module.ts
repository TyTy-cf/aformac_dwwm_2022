import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExosAlgoTsComponent } from './exos-algo-ts/exos-algo-ts.component';
import { SpotifishComponent } from './spotifish/spotifish.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HeaderComponent } from './header/header.component';
import { SpotifishPlaylistComponent } from './spotifish-playlist/spotifish-playlist.component';
import { SpotifishUserComponent } from './spotifish-user/spotifish-user.component';
import { SpotifishArtistComponent } from './spotifish-artist/spotifish-artist.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ExosAlgoTsComponent,
    SpotifishComponent,
    PokedexComponent,
    HeaderComponent,
    SpotifishPlaylistComponent,
    SpotifishUserComponent,
    SpotifishArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
