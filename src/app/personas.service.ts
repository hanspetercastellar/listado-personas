import { EventEmitter, Injectable } from '@angular/core';
import { loggingService } from './LoggingServices.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonaService {
  personas: Persona[] = [
    new Persona('juan', 'perez'),
    new Persona('laura', 'Castellar'),
  ];
  constructor(private logginService: loggingService) {}
  saludar = new EventEmitter<number>();

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsona(
      'persona agregaga' + persona.nombre
    );
    this.personas.push(persona);
  }
}
