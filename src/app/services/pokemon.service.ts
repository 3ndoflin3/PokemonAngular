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
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/'
    console.trace('PokemonService getAll ' + url);
    return this.http.get(url);
  }

  //Pasamos como parámetro una parte del nombre 
  getPokemon(nombre: string): Observable<any> {

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }
  getCaracteristicas(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getById(id: number) {
    throw new Error("Method not implemented.");
  }

  update(pokemon: Pokemon): Observable<any>{
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/' + pokemon.id;
    
    return this.http.put(url, pokemon);
  }



  crear(pokemon: Pokemon): Observable<Pokemon>{
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/';
    //const url = 'http://192.168.0.69:8080/pokemon-rest/api/pokemon/';
    console.debug('metodo crear');

    return this.http.post<Pokemon>(url, pokemon);
  }

  delete(id: number){
    const url = 'http://localhost:8080/pokemon-rest/api/pokemon/' + id;
    //const url = 'http://192.168.0.69:8080/pokemon-rest/api/pokemon/';
    console.debug('metodo delete');

    return this.http.delete<Pokemon>(url);
  }

}
