import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokemon'
})
export class PokemonPipe implements PipeTransform {

  /* Pokemons es el array sobre el que se itera */
  transform(pokemons: any, busqueda: string, value: any, ...args: any[]): any {

    
    return null;
  }

}
