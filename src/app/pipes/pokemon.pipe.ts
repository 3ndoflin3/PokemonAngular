import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokemon'
})
export class PokemonPipe implements PipeTransform {

  
  /* Pokemons es el array sobre el que se itera */
  transform(pokemons: any, busqueda: string, value: any, ...args: any[]): any {
    let resultado = pokemons;

    console.debug('Lista de pokemons en el pipe %o', pokemons);

    if(busqueda != ''){

      resultado = resultado.filter( el => 
        el.nombre.includes(busqueda)
        );

    }


    return resultado;
  }

}
