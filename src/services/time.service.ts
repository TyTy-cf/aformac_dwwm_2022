import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  // pas de constructeur ici, ça ne pose pas de problème !
  // Typescript nous génère un constructeur vide par défaut :
  // constructor() {
  // }

  getTimeFromSeconds(time: number): string {
    if (time === 0) return '00:00';

    const sec: number = time % 60;
    const min: number = Math.floor(time / 60);
    const minStr: string = min < 10 ? '0' + min : min.toString();
    const secStr: string = sec < 10 ? '0' + sec : sec.toString();
    return minStr + ':' + secStr;
  }

}
