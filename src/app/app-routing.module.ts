import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosAlgoTsComponent} from "./exos-algo-ts/exos-algo-ts.component";
import {SpotifishComponent} from "./spotifish/spotifish.component";
import {PokedexComponent} from "./pokedex/pokedex.component";

const routes: Routes = [
  { path: 'exos-ts', component: ExosAlgoTsComponent },
  { path: 'spotifish', component: SpotifishComponent },
  { path: 'pokedex', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
