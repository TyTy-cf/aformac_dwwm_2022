import { Component } from '@angular/core';
import {IStudent} from "../../models/i-student";
import {IScrabble} from "../../models/i-scrabble";

@Component({
  selector: 'app-exos-algo-ts',
  templateUrl: './exos-algo-ts.component.html',
  styleUrls: ['./exos-algo-ts.component.scss']
})
export class ExosAlgoTsComponent {

  title: string = 'Exos Typescript';
  age: number = 42;
  students: IStudent[] =
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

  constructor() {
    // this.exo1(32);
    // this.calcAverage([12, 15, 19, 2, 14]);
    // this.calcTTC(7.5, 4);
    // this.waterType(52);
    // this.studentsAverage(this.students);
    // this.calcPercent(100, 25);
    // this.removeDual([1, 2, 3, 3, 3, 4, 5, 5]);
    // this.generateMultiplicationTable(7);
    // console.log(this.acerp('Angular'));
    // console.log(this.checkPassword('@ngular140'));
    // this.millisecToString(225567);
    // this.transform('chat');
    // this.reverseString('chapeau');
    // this.isPangram('Thé quick brown fox jumps ovêr the làzy dòg.');
    // this.getScrabbleScores('jynx');
    // this.beerSong(99);
  }

  /** Exo Compteur */

  compteur: number = 0;

  changeCompteur(number: number) {
    this.compteur += number;
  }

  exo1(age: number): number {
    const currentYear: number = (new Date()).getFullYear();
    const res: number = currentYear - age;
    console.log(res);
    return res;
  }

  changeAge(newVal: number): void {
    this.age += newVal;
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
   * @param taxes param facultatif, par défaut il aura 19.6
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
    // arrayTmp.reverse()
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

  /**
   * Exo 11 : convert integer (ms) to string
   * @param millsec 250000
   */
  millisecToString(millsec: number): void {
    const ms: number = millsec % 1000;
    const hms: number = Math.floor(millsec / 1000);
    const sec: number = hms % 60;
    const min: number = Math.floor(hms / 60);
    const minStr: string = min < 10 ? '0'+min : min.toString();
    const secStr: string = sec < 10 ? '0'+sec : sec.toString();
    const msStr: string = ms < 10 ? '00'+ms : ms < 100 ? '0'+ms : ms.toString();
    console.log(minStr + ':'+secStr+'.'+msStr);
  }

  // chat => chafeat
  // a => afea
  transform(word: string, transformValue: string = 'fe'): void {
    // Déclarer une chaineTmp => la nouvelle chaine de caractères qui aura les modifs
    let stringTmp: string = '';
    // les voyelles => ['a', 'e'...]
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u','y'];
    // parcours word (le mot en param) => boucle for..of ?
    for (const letter of word) {
      // ajouter la lettre en cours de parcours directement à chaineTmp
      stringTmp += letter; // a
      // si la lettre en cours de parcours est une voyelle, alors
      if (vowels.includes(letter)) {
        // j'ajoute la transformationValue à chaineTmp, puis je répère la lettre en cours de parcours
        stringTmp += transformValue + letter; // fe + a
      }
    }
    // log chaineTmp (en dehors de la boucle)
    console.log(stringTmp);
  }

  /**
   * @param str
   * @private
   */
  reverseString(str: string) {
    let newStr: string = '';
    // str.length - 1 => car un index dans un tableau/string commence à 0 !
    // donc pour chaine de 7 caractères le dernier indice sera 6, et non 7
    for (let i = (str.length - 1); i >= 0; i--) {
      newStr += str[i];
    }
    console.log(newStr);
  }

  /**
   * @param str
   * @private
   */
  isPangram(str: string) {
    let stringTmp: string[] = [];
    const alpha: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y', 'z'];
    str = str.toLowerCase().trim();
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // parcours str (le mot en param) => boucle for..of ?
    for (const letter of str) {
      if (alpha.includes(letter) && !stringTmp.includes(letter)) {
        stringTmp.push(letter);
      }
    }
    console.log(stringTmp.length === alpha.length);
  }

  getScrabbleScores(str: string): void {
    const scores: IScrabble[] = [
      { point: 1, letters: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] },
      { point: 2, letters: ["D", "G"] },
      { point: 3, letters: ["B", "C", "M", "P"] },
      { point: 4, letters: ["F", "H", "V", "W", "Y"] },
      { point: 5, letters: ["K"] },
      { point: 8, letters: ["J", "X"] },
      { point: 10, letters: ["Q", "Z"] }
    ];

    // mettre la chaine en majuscule pour tester les bonnes lettres
    str = str.toUpperCase();
    // variable tmp pour le score
    let finalScore: number = 0;
    // parcours de la chaine de caractères de base
    for (const letter of str) {
      //  parcours du tableau de scores
      for (const score of scores) {
        // on vérifit si la lettre en cours de parcours, existe dans le tableau de lettre des scores
        if (score.letters.includes(letter)) {
          // on ajoute son score
          finalScore += score.point;
        }
      }
    }
    console.log(finalScore);
  }

  beerSong(nbBeers: number): void {
    if (nbBeers > 0) {
      console.log(nbBeers + ' bottles of beer on the wall, ' + nbBeers + ' bottles of beer.');
      const oneLessBeer: number = nbBeers - 1;
      const textLessBeer: string = oneLessBeer === 0 ? 'no more' : oneLessBeer.toString();
      console.log('Take one down and pass it around, ' + textLessBeer + ' bottles of beer on the wall.');
      this.beerSong(nbBeers - 1);
    } else {
      console.log(
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
      );
    }
  }
}
