import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('juan', 'perez'),
    new Persona('laura', 'Castellar'),
  ];

  onPersonaAgregada(persona: Persona) {
    this.personas.push(persona);
  }
}
