import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {BackofficeComponent} from './paginas/backoffice/backoffice.component';
import {PokemonFormComponent} from './paginas/pokemon-form/pokemon-form.component';
import {FormularioComponent} from './paginas/formulario/formulario.component';
import { CrearComponent } from './paginas/crear/crear.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'backoffice', component: BackofficeComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'pokemonForm', component: PokemonFormComponent},
  { path: 'crear', component: CrearComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RUTAS = [
  {
    "enlace": "/",
    "nombre": "Inicio"
  },
  {
    "enlace": "backoffice",
    "nombre": "Backoffice"
  },
  {
    "enlace": "formulario",
    "nombre": "Formulario"
  },
  {
    "enlace": "pokemonForm",
    "nombre": "Pokemon"
  },
  {
    "enlace": "crear",
    "nombre": "Crear"
  }

];
