
export class UrlApi {

  static rawUrl: string = 'https://pokeapi.co/api/v2';
  static pokedexUrl: string = UrlApi.rawUrl + '/pokemon?offset=0&limit=20';

  static rawUrlDigimon: string = 'https://digimon-api.vercel.app/api/digimon';
  static rawUrlDigimonLevel: string = UrlApi.rawUrlDigimon + '/level';

}
