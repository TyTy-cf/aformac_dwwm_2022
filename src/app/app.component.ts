import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nomprojet';

  constructor() {
    // this.exo1(32);
    this.calcAverage([12, 15, 19, 2, 14]);
    this.calcTTC(7.5, 4);
  }

  exo1(age: number): void {
    const currentYear: number = (new Date()).getFullYear();
    console.log(currentYear - age);
  }

  /**
   * Exo 2 : calcul de la moyenne d'un tableau de notes
   * @param arrayRanks mon tableau de notes
   */
  calcAverage(arrayRanks: number[]): number {
    let sum: number = 0;
    for (const digit of arrayRanks) {
      sum += digit;
    }
    // return sum / arrayRanks.length
    const average: number = sum / arrayRanks.length;
    console.log(average);
    return average;
  }

  /**
   * Exo 3 : Calcul un prix TTC à partir d'un prix HT & sa quantité
   * @param priceU
   * @param qty
   * @param taxes
   * @private
   */
  private calcTTC(priceU: number, qty: number, taxes: number = 19.6): void {
    const price: string = ((priceU * qty) * (taxes / 100 + 1)).toFixed(2);
    console.log(price);
  }

}
