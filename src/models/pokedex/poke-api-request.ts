import {PokemonResult} from "./pokemon-result";

export interface PokeApiRequest {
  next: string|undefined;
  previous: string|undefined;
  results: PokemonResult[];
}
