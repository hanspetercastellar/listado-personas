import { PersonaService } from './../personas.service';
import { loggingService } from './../LoggingServices.service';
import { Persona } from './../persona.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [],
})
export class FormularioComponent implements OnInit {
  constructor(
    private logginService: loggingService,
    private personaService: PersonaService
  ) {
    personaService.saludar.subscribe((indice: number) =>
      alert('El idice es ' + indice + 1)
    );
  }
  //local  references
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;
  /*   nombreInput: string;
  apellidoInput: string; */
  ngOnInit(): void {}
  onAgregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    /*    this.personaCreada.emit(persona1);
     */
    this.personaService.agregarPersona(persona1);
    this.logginService.enviaMensajeAConsona(
      'Persona agregada' + persona1.nombre
    );
  }
}
