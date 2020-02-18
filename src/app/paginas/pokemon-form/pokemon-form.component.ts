import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  listaPokemon: Array<Pokemon>;
  pokemonSeleccionado: Pokemon;
  habilidades: Set<any>;
  hayPokemon: boolean;
  pokemon: Pokemon;



  constructor(private pokemonService: PokemonService) {
    console.trace('InicioComponent constructor')
    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = new Set<any>();

  }//constructor()

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

    //Mostramos el listado de pokemon
    this.obtenerListado();


  }//ngOnInit

  comprobarPokemon(pokemon) {
    if (pokemon != '' || typeof pokemon != undefined) {
      this.hayPokemon = true;
    };
    return this.hayPokemon;
  }

  //Método para obtener todos los pokemon
  obtenerListado() {
    this.pokemonService.getAll().subscribe(

      data => {
        console.debug(data);
        this.listaPokemon = data;

        this.habilidades = data.map(habilidades => habilidades.habilidad);
        console.debug(this.habilidades);
/* ------------------------------------------------------------------------------------------------------------ */
        /* data.forEach(habilidad => {
          console.log(habilidad);
          return this.habilidades = data.map(habilidad => habilidad.nombre);

        }); */
/* ------------------------------------------------------------------------------------------------------------ */

        //console.debug('habilidades %o', this.habilidades)
      },

      error => {
        console.warn('Error al obtener el listado de pokemon');
      },
      () => {
        console.trace('Estamos intentando obtener el listado');
      }
    )
  }//obtenerListado()



  seleccionarPokemon(pokemon) {
    console.log('Click seleccionarPokemon');
    this.pokemonSeleccionado = pokemon;

  }//seleccionarPokemon
  

  enviar( formData ) {
    console.debug('click en enviar %o', formData);
    // TODO llamar servicio
  }/* enviar */


  crear(pokemon){// data informacion que te llega en la peticion, error si da error, y el () lo hace siempre 
    this.pokemonService.crear(pokemon).subscribe(
      data => {
        console.log('Data del post %o', pokemon);
        this.pokemon = data;
    },

    error =>{
      console.error('Error en el metodo POST');

    },

    () => {
      console.log('Finally del Post');

    }
    
    );

  }

}
