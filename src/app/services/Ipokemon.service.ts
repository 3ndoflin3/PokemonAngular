import { Observable } from "rxjs";
import { Pokemon } from '../model/pokemon';

export interface IPokemonService {

    /**
     * Recuperamos los datos en JSON de todos los pokemon
     * 
     */
    getAll(): Observable<any>;

    /**
     * Recuperamos los datos en JSON de un pokemon buscando el nombre
     * @param nombre: string, nombre del pokemon buscado
     * 
     */
    getPokemon(nombre: string): Observable<any>

    
    getById(id: number);


}