import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './Ipokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {



  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }//Constructor

  //Obtenemos el listado de todos los pokemons
  getAll(): Observable<any> {
    //const url = 'http://localhost:8080/pokemon-rest/api/pokemon/'
    const url = 'http://localhost:3000/pokemon/';
    console.trace('PokemonService getAll ' + url);
    return this.http.get(url);
  }

  //Pasamos como parámetro una parte del nombre 
  getPokemon(nombre: string): Observable<any> {

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  getById(id: number) {
    const url = 'http://localhost:3000/pokemon/' + id; 
    console.trace('PoekemonService getById ' + url); 
    return this.http.get(url);

  }

  updatePokemon(pokemon: Pokemon): Observable<any>{
    //const url = 'http://localhost:8080/pokemon-rest/api/pokemon/' + pokemon.id;
    const url = 'http://localhost:3000/pokemon/' + pokemon.id;
    return this.http.put(url, pokemon);
  }



  createPokemon(pokemon: Pokemon): Observable<Pokemon>{
    //const url = 'http://localhost:8080/pokemon-rest/api/pokemon/';
    
    const url = 'http://localhost:3000/pokemon/';

    console.debug('metodo crear');

    return this.http.post<Pokemon>(url, pokemon);
  }

  delete(id: number){
    //const url = 'http://localhost:8080/pokemon-rest/api/pokemon/' + id;
    const url = 'http://localhost:3000/pokemon/' + id;
    console.debug('metodo delete');

    return this.http.delete<Pokemon>(url);
  }

  getAllHabilidades(): Observable<any> {
    //const url = 'http://localhost:8080/pokemon-rest/api/habilidad/';
    const url = 'http://localhost:3000/habilidades/';
    console.trace('PokemonService getAllHabilidades ' + url);
    return this.http.get(url);
  }

  
}
