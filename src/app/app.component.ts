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
    // this.waterType(52);
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
    // this.studentsAverage(students);
    // this.calcPercent(100, 25);
    // this.removeDual([1, 2, 3, 3, 3, 4, 5, 5]);
    // this.generateMultiplicationTable(7);
    // console.log(this.acerp('Angular'));
    // console.log(this.checkPassword('@ngular140'));
    // this.transform('chat');
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

  /**
   * Exo 4 : indiquer en fonction de la température de l'eau son état
   *
   * @param temp
   */
  waterType(temp: number): void {
    let infoTemp: string = 'Liquide';
    if (temp >= 100) {
      infoTemp = 'Gaz';
    } else if (temp <= 0) {
      infoTemp = 'Solide';
    }
    console.log(infoTemp);
  }

  /**
   * Exo 5 : calcul de la moyene pour un tableau d'étudiants
   *
   * @param arrayStudents
   */
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

  /**
   *
   * Exo 6
   *
   * @param price, un prix...
   * @param percent, ex : 20, 25, 30
   */
  calcPercent(price: number, percent: number): void {
    console.log(((percent / 100 + 1) * price).toFixed(2) + '€');
  }

  /**
   * Exo 7 : retirer les doublons d'un tableau, ex: [1, 2, 3, 3, 3, 4, 5, 5]
   *
   * @param arrayNumber
   */
  removeDual(arrayNumber: number[]): void {
    // arrayTmp = []
    let arrayTmp: number[] = [];
    // parcours arrayNumber,
    for (const ite of arrayNumber) {
      // si mon itération en cours (ite) n'existe pas dans arrayTmp
      if (arrayTmp.indexOf(ite) === -1) {
        // alors je l'ajoute
        arrayTmp.push(ite);
      }
    }
    // log arrayTmp
    console.log(arrayTmp);
  }

  /**
   * Exo 8 :
   *
   * @param multi, la table de multiplication demandée
   * @param max, la limite demandée
   */
  generateMultiplicationTable(multi: number, max: number = 12): void {
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // ...
    for (let i: number = 1; i <= max ; i++) {
      console.log(multi + ' x ' + i + ' = ' + (multi * i));
    }
  }

  /**
   * Exo 9 : acerp (text long) + '...'
   *
   * @param text
   */
  acerp(text: string): string {
    if (text.length > 15) {
      return text.substring(0, 15) + '...';
    }
    return text;
  }

  /**
   * Exo 10 : checkPassword : >9 && @ à l'intérieur
   *
   * @param password
   */
  checkPassword(password: string): boolean {
    return password.length > 9 && password.includes('@');
    // return password.length > 9 && password.indexOf('@') >= 0;
  }

  // chat => chafeat
  transform(word: string, transformValue: string = 'fe'): void {
    for (const letter of word) {
      console.log(letter);
    }
    // Déclarer une chaineTmp => la nouvelle chaine de caractères qui aura les modifs
    // les voyelles => ['a', 'e'...]
    // parcours word (le mot en param) => boucle for..of ?
      // ajouter la lettre en cours de parcours directement à chaineTmp
      // si la lettre en cours de parcours est une voyelle, alors
      // j'ajoute la transformationValue à chaineTmp, puis je répère la lettre en cours de parcours
    // log chaineTmp (en dehors de la boucle)
  }

}
