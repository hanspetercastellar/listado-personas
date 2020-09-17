import { Persona } from './../persona.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  /*   nombreInput: string;
  apellidoInput: string; */

  onAgregarPersona(nom: HTMLInputElement, ape: HTMLInputElement) {
    let persona1 = new Persona(nom.value, ape.value);
    this.personaCreada.emit(persona1);
    console.log(persona1);
  }
}
