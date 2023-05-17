import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';
import { ListarPersonajeComponent } from './listar-personaje/listar-personaje.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListarFamiliasComponent } from './listar-familias/listar-familias.component';
import { ListarClanesComponent } from './listar-clanes/listar-clanes.component';
import { ListarHabilidadesComponent } from './listar-habilidades/listar-habilidades.component';
import { ListarDestacaresComponent } from './listar-destacares/listar-destacares.component';
import { ListarHerenciasComponent } from './listar-herencias/listar-herencias.component';
import { ListarTrasfondoComponent } from './listar-trasfondo/listar-trasfondo.component';
import { ListarEscuelasComponent } from './listar-escuelas/listar-escuelas.component';
import { ListarTecnicasComponent } from './listar-tecnicas/listar-tecnicas.component';
import { ListarEquipamientoComponent } from './listar-equipamiento/listar-equipamiento.component';
import { MapaComponent } from './mapa/mapa.component';
import { CrearFichaComponent } from './crear-ficha/crear-ficha.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { CookieService } from 'ngx-cookie-service';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost:4200' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    AgregarPersonajeComponent,
    EditarPersonajeComponent,
    ListarPersonajeComponent,
    ListarFamiliasComponent,
    ListarClanesComponent,
    ListarHabilidadesComponent,
    ListarDestacaresComponent,
    ListarHerenciasComponent,
    ListarTrasfondoComponent,
    ListarEscuelasComponent,
    ListarTecnicasComponent,
    ListarEquipamientoComponent,
    MapaComponent,
    CrearFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
