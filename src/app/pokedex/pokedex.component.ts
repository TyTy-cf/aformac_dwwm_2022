import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../services/url-api";
import {PokeApiRequest} from "../../models/pokedex/poke-api-request";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokeApiRequest: PokeApiRequest|undefined;

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getPagePokedex();
  }

  getPagePokedex(url: string = UrlApi.pokedexUrl): void {
    this._httpService.getRequest<PokeApiRequest>(url)
      .subscribe((jsonResponse) => {
        this.pokeApiRequest = jsonResponse;
      }
    );
  }

  getIndex(url: string): string {
    return url.split('/')[6];
  }

  getImage(url: string): string {
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+this.getIndex(url)+'.png';
  }
}
