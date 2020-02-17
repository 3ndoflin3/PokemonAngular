import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor( private builder: FormBuilder ) {

    this.formulario = this.builder.group({
      id: new FormControl( 0 ),
      nombre: new FormControl(
                                '', // valor inicial
                                [ Validators.required, Validators.minLength(2), Validators.maxLength(50)] // validacines
                              ),
    });

  }

  ngOnInit() {
  }

  enviar( formData ) {
    console.debug('click en enviar %o', formData);
    // TODO llamar servicio
  }


  ejemplo() {
    console.debug('click ejemplo');
    const pokemon = {
        'id' : 3,
        'nombre': 'pikatchu'
    };

    const controlId = this.formulario.get('id');
    controlId.setValue( pokemon.id );

    this.formulario.get('nombre').setValue( pokemon.nombre );

  }


}