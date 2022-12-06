import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-agregar-personaje',
  templateUrl: './form-agregar-personaje.component.html',
  styleUrls: ['./form-agregar-personaje.component.css']
})
export class FormAgregarPersonajeComponent {

  @Input() nuevoData: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService : DbzService){}

  // @Output() onNewCharacter : EventEmitter<Personaje> = new EventEmitter(); 

  agregar( ):void{
    if(this.nuevoData.nombre.trim().length === 0){
      return;
    }

    // this.onNewCharacter.emit( this.nuevoData );
    this.dbzService.agregarPersonaje(this.nuevoData);
    this.nuevoData = {
      nombre: '',
      poder: 0,
    }
  }
}
