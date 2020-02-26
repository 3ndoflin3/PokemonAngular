import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CrearComponent } from './paginas/crear/crear.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
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
    "enlace": "crear",
    "nombre": "Crear"
  }

];
