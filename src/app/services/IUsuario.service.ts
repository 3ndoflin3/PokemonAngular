import { Usuario } from '../model/usuario';

//Tenemos que importar observable de rxjs


export interface IUsuarioService {

    estaLogueado(): boolean;

    login(usuario: Usuario): Usuario;

    logout(usuario: Usuario);


}