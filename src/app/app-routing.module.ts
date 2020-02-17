import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import {BackofficeComponent} from './paginas/backoffice/backoffice.component';
import {ModalComponent} from './paginas/modal/modal.component'; 

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
  },
  {
    "enlace": "modalcomponent",
    "nombre": "Modal"
  }
];
