import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
  formulario: FormGroup;


  constructor(private pokemonService: PokemonService, private builder: FormBuilder) {
    console.trace('InicioComponent constructor')
    this.listaPokemon = new Array<Pokemon>();
    this.habilidades = new Set<any>();
    this.pokemon = new Pokemon();
    //Group define un grupo de inputs
    this.formulario = this.builder.group({

      id: new FormControl(0),
      nombre: new FormControl(
        '', // Valor inicial
        [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      )
    });


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
    this.formulario.get('id').setValue(pokemon.id);
    this.formulario.get('nombre').setValue(pokemon.nombre);
    this.pokemonSeleccionado = new Pokemon();


  }//seleccionarPokemon
  

  enviar( formData ) {
    console.debug('click en enviar %o', formData);
    // TODO llamar servicio
  }/* enviar */


  limpiarFormulario(){
    this.formulario.get('id').setValue(0);
    this.formulario.get('nombre').setValue('');
    
  }

  crear(datosEnviados){// data informacion que te llega en la peticion, error si da error, y el () lo hace siempre 

    this.pokemon.nombre = datosEnviados.nombre;
    this.pokemonService.crear(this.pokemon).subscribe(
      data => {
        console.log('Data del post %o', datosEnviados);
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
