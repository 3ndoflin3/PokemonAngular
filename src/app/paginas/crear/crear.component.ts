import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Mensaje } from 'src/app/model/mensaje';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

    // Pokemon
    listaPokemon: Array<any>;
    pokemonSeleccionado: Pokemon;
    pokemon: Pokemon;
  
    // Formulario
  
    //Declaramos un formulario 
    formulario: FormGroup;
  
    //Declaramos el array de habilidades de dentro del formulario
    formHabilidades: FormArray;
  
    // Regex para comprobar el formato de la URL
    urlRegex: any;
  
    //Array de habilidades (posteriormente se añadirán)
    habilidades: Array<any>;
  
    // Mensaje
    mensaje: Mensaje;
  
  
  
  
  
    constructor(private pokemonService: PokemonService, private builder: FormBuilder) {
      // Inicializamos la lista
      this.listaPokemon = [];
  
      // Inicializamos el pokemon seleccionado
      this.pokemonSeleccionado = new Pokemon();
  
      //Inicializamos el pokemon que vamos a utilizar 
      this.pokemon = new Pokemon();
  
      //Inicializamos regex
      this.urlRegex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
  
      // Mensajes
      this.mensaje = new Mensaje();
  
      this.mensaje.mensaje = 'Estos son todos los pokemons disponibles:';
  
      // Llamamos a un método para crear  el formulario:
      this.crearFormulario();
  
    }// Constructor()
  
    ngOnInit() {
  
      console.trace('ngOnInit: cargamos el listado de pokemons');
  
      // Obtenemos el listado de pokemons (getAll)
      this.obtenerListado();
  
      // Obtenemos el listado de habilidades (getAll)
      this.obtenerHabilidades();
  
    }// ngOnInit()
  
    crearFormulario() {
  
      console.trace('Empezamos a crear el formulario');
      // Construimos el formulario
      this.formulario = this.builder.group({
        // Definimos los formControl : input
        id: new FormControl(0),
        nombre: new FormControl(
          '', // valor inicial
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ] // validaciones
        ),
        imagen: new FormControl(
          '', // valor inicial
          [
            Validators.required,
            Validators.pattern(this.urlRegex)
          ],
        ),// Ahora vamos a crear el array dentro del formulario
        habilidades: this.builder.array([], // Se crea el array vacío
          // Con esta línea se metería por defecto una habilidad
          // [this.crearFormGroupHabilidad()]
          [
            Validators.required,
            Validators.minLength(1)
          ]
        )
      });
  
      // Obtenemos las habilidades del formulario y las guardamos
      this.formHabilidades = this.formulario.get('habilidades') as FormArray;
  
    }// crearFormulario() 
  
    crearFormGroupHabilidad(): FormGroup {
      console.debug(' crearFormGroupHabilidad()');
      return this.builder.group({
        id: new FormControl(0),
        nombre: new FormControl('')
      })
    }// crearFormGroupHabilidad()
  
    checkCambiado(option: any) {
      // Si esta chequeado, cambiamos a no chequeado
      console.debug('checkCambiado %o', option);
      option.checked = !option.checked;
  
      const habilidad = this.crearFormGroupHabilidad();
  
      habilidad.get('id').setValue(option.id);
      habilidad.get('nombre').setValue(option.nombre);
  
      if (!option.checked) {
        this.formHabilidades.removeAt(this.formHabilidades.value.findIndex(el => el.id === option.id));
      } else {
        this.formHabilidades.push(habilidad);
      }
  
    }// checkCambiado(option: any)
  
    seleccionarPokemon(pokemon) {
      console.debug('seleccionarPokemon %o', pokemon)
      this.pokemonSeleccionado = pokemon;
      //Creamos el formulario de nuevo
      this.crearFormulario();
  
      this.formulario.get('id').setValue(pokemon.id);
      this.formulario.get('nombre').setValue(pokemon.nombre);
      this.formulario.get('imagen').setValue(pokemon.imagen);
  
      //Llamamos al método que nos pondrá checked cada habilidad de los pokemon
      if (this.pokemonSeleccionado) {
        this.marcarHabilidades(this.pokemonSeleccionado);
      }
  
      // poner las habilidades del pokemon en el formulario.(son de tipo formgroup)
  
  
    }// seleccionarPokemon(pokemon)
  
    marcarHabilidades(pokemon: Pokemon) {
      console.trace('marcarHabilidades(pokemon: Pokemon) ')
      //Cojemos las habilidades y hacemos un map, recorremos cada una de ellas 
      
  
    }
  
    // Método para obtener todos los pokemon
    obtenerListado() {
      this.pokemonService.getAll().subscribe(
  
        data => {
          console.debug(data);
          this.listaPokemon = data;
  
        },
  
        error => {
          console.warn('Error al obtener el listado de pokemon');
          this.mensaje.mensaje = 'Error al obtener el listado de pokemons';
          this.mensaje.tipoMensaje = 'danger';
        },
        () => {
          console.trace('Estamos intentando obtener el listado');
        }
      )
    }// obtenerListado()
  
    //Método que cargará las habilidades del service
    obtenerHabilidades() {
      this.pokemonService.getAllHabilidades().subscribe(
  
        data => {
          console.debug(data);
          this.habilidades = data.map(el => {
            return { nombre: el.nombre, id: el.id, checked: false }
          });
        },
  
        error => {
          console.warn('No se han podido obtener las habilidades');
          this.mensaje.mensaje = 'Error al obtener las habilidades';
          this.mensaje.tipoMensaje = 'danger';
        }
      )
  
    }// obtenerHabilidades()
  
    // Método que sirve para limpiar el formulario
    limpiarFormulario() {
      console.trace('Limpiar formulario')
      /*this.formulario.get('nombre').setValue('');
      this.formulario.get('id').setValue(0);
      this.formulario.get('imagen').setValue('');
      this.pokemonSeleccionado = new Pokemon();
      this.formHabilidades = [];*/
      this.crearFormulario();
      //this.formulario.reset();
  
      // Poner todos los checked  a false
      this.habilidades.forEach(habilidad => habilidad.checked = false);
      this.pokemonSeleccionado = new Pokemon();
  
    }// limpiarFormulario()
  
    eliminarPokemon(pokemon) {
      //Ventana modal para confirmar que se desea eliminar el pokemon
      let opcion = confirm('¿Estás seguro de eliminar el pokemon '.concat(pokemon.nombre).concat('?'));
      console.debug('Pokemon %o', pokemon)
      if (opcion) {
        this.pokemonService.delete(this.pokemonSeleccionado.id).subscribe(
          data => {
            console.debug('Datos obtenidos %o', data);
            this.mensaje.mensaje = 'Se he eliminado correctamente el pokemon ' + this.pokemonSeleccionado.nombre + '.';
            this.mensaje.tipoMensaje = 'success';
            this.obtenerListado();
          },
  
          error => {
            console.debug('Petición erronea %o', error);
            this.mensaje.mensaje = 'Error al eliminar el pokemon';
            this.mensaje.tipoMensaje = 'danger';
          },
  
          () => {
            console.debug('Finaliza la petición')
          }
        );
      }
  
    }
  
    // Método que servirá para realizar el submit del formulario (create y update)
  
    enviarFormulario(datosEnviados) {
      console.trace('Enviar formulario %o', datosEnviados);
  
      // Le metemos el nombre, la imagen al pokemon y sus habilidades independientemente de si existe o no
      this.pokemon.nombre = (datosEnviados.nombre);
      this.pokemon.imagen = (datosEnviados.imagen);
      this.pokemon.habilidades = (datosEnviados.habilidades);
  
      if (datosEnviados.id === 0) {
  
        // llamamos al service para crear
        this.pokemonService.createPokemon(this.pokemon).subscribe(
          data => {
            console.debug('Datos obtenidos %o', data);
            this.mensaje.tipoMensaje = 'success';
            this.mensaje.mensaje = 'Se he creado correctamente el pokemon ' + this.pokemon.nombre + '.';
            this.obtenerListado();
          },
  
          error => {
            console.debug('Petición erronea %o', error);
            this.mensaje.mensaje = 'Error al crear el pokemon ' + this.pokemon.nombre + '.';
            this.mensaje.tipoMensaje = 'danger';
          },
  
          () => {
            console.debug('Finaliza la petición')
          }
        );
      } else {
        // Llamamos al service para actualizar
  
        //Le metemos los datos al nuevo pokemon
        this.pokemon.id = (datosEnviados.id);
        this.pokemonService.updatePokemon(this.pokemon).subscribe(
          data => {
            console.debug('Datos obtenidos %o', data);
            this.mensaje.tipoMensaje = 'success';
            this.mensaje.mensaje = 'Se he actualizado correctamente el pokemon ' + this.pokemonSeleccionado.nombre + '.';
            this.obtenerListado();
          },
  
          error => {
            console.debug('Petición erronea %o', error);
            this.mensaje.mensaje = 'Error al actualizar el pokemon' + this.pokemon.nombre + '.';
            this.mensaje.tipoMensaje = 'danger';
          },
  
          () => {
            console.debug('Finaliza la petición')
          }
        );
  
      }
    }//enviarFormulario(datosEnviados)
  
}
