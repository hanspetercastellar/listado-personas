import { loggingService } from './LoggingServices.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent],
  imports: [BrowserModule, FormsModule],
  providers: [loggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
