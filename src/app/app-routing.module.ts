import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {BackofficeComponent} from './paginas/backoffice/backoffice.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'backoffice', component: BackofficeComponent }
  
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
  }
];
