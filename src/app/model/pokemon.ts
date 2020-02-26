import { NumberFormatStyle } from '@angular/common';

export class Pokemon {

    id: number;

    nombre: string;
    imagen: string;
    habilidades: Array<any>;



    constructor(id: number = 0, nombre: string = '', imagen: string = '', habilidad: string = '') {
        this.id = 0;
        this.nombre = nombre;
        this.imagen = 'https://bolavip.com/__export/1569190757437/sites/bolavip/img/2019/09/22/ditto_crop1569190757042.jpg_1693159006.jpg';
        this.habilidades = [];
    }

    addHabilidad( habilidad : string){
        this.habilidades.push(habilidad);
    }

}
