import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../services/url-api";
import {Digimon} from "../../models/digimon/digimon";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-digidex',
  templateUrl: './digidex.component.html',
  styleUrls: ['./digidex.component.scss']
})
export class DigidexComponent implements OnInit {

  arrayDigimons: Digimon[] = [];
  arrayLevel: string[] = [
    'rookie',
    'mega',
    'in training',
    'champion',
    'ultimate',
    'fresh',
    'armor'
  ];

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    // Comportement idéal : le any est remplacé
    this.getDigimons();

    // Mettre un any entre les chevrons permet de dire que l'on ne sait pas trop encore
    // de quel type la donnée récupérée du Json sera
    // => TRES UTILE POUR TESTER ET VISUALISER LES DONNEES RECUPEREES DE L'API

    // this._httpService.getRequest<any>(UrlApi.rawUrlDigimon)
    //   .subscribe((jsonResponse) => {
    //       console.log(jsonResponse);
    //     }
    //   );

  }

  getLevelUrl(level: string): void {
    this.getDigimons(UrlApi.rawUrlDigimonLevel + level);
  }

  getDigimons(url: string = UrlApi.rawUrlDigimon): void {
    this._httpService.getRequest<Digimon[]>(url)
      .subscribe((jsonResponse) => {
        this.arrayDigimons = jsonResponse;
      }
        // , (errorHttp) => {
        //   if (errorHttp instanceof HttpErrorResponse) {
        //     alert(errorHttp.error.ErrorMsg)
        //   }
        // }
    );
  }

}
