import { Component } from '@angular/core';
import {IStudent} from "../models/i-student";
import {IScrabble} from "../models/i-scrabble";
import {Dice} from "../models/dice";
import {User} from "../models/spotifish/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Dices */
  dice: Dice = new Dice();

  constructor() { }

}
