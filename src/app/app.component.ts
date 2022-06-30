import { Component } from '@angular/core';
import {IStudent} from "../models/i-student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'nomprojet';
  // anArray: Array<string> = new Array<string>();
  // anArray: Array<string> = [];
  // anArray: string[] = [];

  constructor() {
    // this.exo1(32);
    // this.calcAverage([12, 15, 19, 2, 14]);
    // this.calcTTC(7.5, 4);
    const students: IStudent[] =
    [
      {
        name: 'Albert',
        grades: [12, 15, 19, 2, 14]
      },
      {
        name: 'Vincent',
        grades: [17, 16, 15, 18, 13]
      },
      {
        name: 'Michel',
        grades: [14, 13, 12, 11, 10]
      }
    ];
    this.studentsAverage(students);
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
  calcTTC(priceU: number, qty: number, taxes: number = 19.6): void {
    const price: string = ((priceU * qty) * (taxes / 100 + 1)).toFixed(2);
    console.log(price + '€');
  }

  studentsAverage(arrayStudents: IStudent[]): void {
    // for (let i: number = 0; i < students.length; i++) {
    //   console.log(students[i]);
    // }

    // je veux accéder à UN seul étudiant de mon tableau
    // => parcourir le tableau, pour chaque étudiant faire...
    for (const aStudent of arrayStudents) {
      // affichage du nom de l'étudiant avec sa moyenne calculée
      console.log('Etudiant : ' + aStudent.name + ' a ' + this.calcAverage(aStudent.grades));
    }
  }
}
