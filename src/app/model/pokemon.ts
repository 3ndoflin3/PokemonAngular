import { NumberFormatStyle } from '@angular/common';

export class Pokemon {

    private _id: number;

    private _nombre: string;
    private _imagen: string;
    private _habilidades: Array<String>;



    constructor(id: number, nombre: string, imagen: string, habilidad: string) {
        this.id = 0;
        this.nombre = nombre;
        this.imagen = 'https://bolavip.com/__export/1569190757437/sites/bolavip/img/2019/09/22/ditto_crop1569190757042.jpg_1693159006.jpg';
        this.habilidades = [];
    }


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = (value !== undefined && value !== '') ? value : 'sin nombre';
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get habilidades(): Array<String> {
        return this._habilidades;
    }
    public set habilidades(value: Array<String>) {
        this._habilidades = value;
    }



}
