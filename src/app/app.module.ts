import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExosAlgoTsComponent } from './exos-algo-ts/exos-algo-ts.component';
import { SpotifishComponent } from './spotifish/spotifish.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ExosAlgoTsComponent,
    SpotifishComponent,
    PokedexComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
