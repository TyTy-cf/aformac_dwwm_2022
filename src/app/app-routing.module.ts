import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExosAlgoTsComponent} from "./exos-algo-ts/exos-algo-ts.component";
import {SpotifishComponent} from "./spotifish/spotifish.component";

const routes: Routes = [
  { path: 'exos-ts', component: ExosAlgoTsComponent },
  { path: 'spotifish', component: SpotifishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
