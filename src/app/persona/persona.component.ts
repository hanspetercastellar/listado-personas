import { PersonaService } from './../personas.service';
import { Persona } from './../persona.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {}

  emitirSaludo() {
    this.personaService.saludar.emit(this.indice);
  }
}
