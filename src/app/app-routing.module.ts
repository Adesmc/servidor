import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';
import { EditarPersonajeComponent } from './editar-personaje/editar-personaje.component';
import { ListarPersonajeComponent } from './listar-personaje/listar-personaje.component';
import { ListarFamiliasComponent } from './listar-familias/listar-familias.component';
import { ListarClanesComponent } from './listar-clanes/listar-clanes.component';
import { ListarDestacaresComponent } from './listar-destacares/listar-destacares.component';
import { ListarEquipamientoComponent } from './listar-equipamiento/listar-equipamiento.component';
import { ListarEscuelasComponent } from './listar-escuelas/listar-escuelas.component';
import { ListarHabilidadesComponent } from './listar-habilidades/listar-habilidades.component';
import { ListarHerenciasComponent } from './listar-herencias/listar-herencias.component';
import { ListarTecnicasComponent } from './listar-tecnicas/listar-tecnicas.component';
import { ListarTrasfondoComponent } from './listar-trasfondo/listar-trasfondo.component';
import { MapaComponent } from './mapa/mapa.component';
import { CrearFichaComponent } from './crear-ficha/crear-ficha.component';



const routes: Routes = [

  {path:'',pathMatch:'full', redirectTo:'agregar-personaje'},
  {path:'agregar-personaje',component: AgregarPersonajeComponent},
  {path:'listar-personaje',component: ListarPersonajeComponent},
  {path:'editar-personaje/:ID_personaje',component: EditarPersonajeComponent},
  {path:'listar-familias',component: ListarFamiliasComponent},
  {path:'listar-clanes',component: ListarClanesComponent},
  {path:'listar-destacares',component: ListarDestacaresComponent},
  {path:'listar-equipamiento',component: ListarEquipamientoComponent},
  {path:'listar-escuelas',component: ListarEscuelasComponent},
  {path:'listar-habilidades',component: ListarHabilidadesComponent},
  {path:'listar-herencias',component: ListarHerenciasComponent},
  {path:'listar-tecnicas',component: ListarTecnicasComponent},
  {path:'listar-trasfondo',component: ListarTrasfondoComponent},
  {path:'mapa',component: MapaComponent},
  {path:'Crear_personaje',component: CrearFichaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
