import { loggingService } from './LoggingServices.service';
import { PersonaService } from './personas.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonaService],
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';
  personas: Persona[] = [];
  constructor(private personasService: PersonaService) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  /*  onPersonaAgregada(persona: Persona) {
    console.log(persona);
    this.personasService.agregarPersona(persona);
     this.personas.push(persona);
    this.loggingService.enviaMensajeAConsona('desde el arreglo'); 
  } */
}
