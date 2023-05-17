import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent{

  FormularioPersonaje:FormGroup;

  constructor(public formulario:FormBuilder,
    private CrudService:CrudService,
    private ruteador:Router) {

    this.FormularioPersonaje=this.formulario.group( {
      id_personaje:[''],
      Familia:[''],
      Clan:[''],
      Escuela:[''],
      nombre:[''],
      Herencia:[''],
      Destacar:['']
    })
  }

  enviarDatos(): any{
    console.log("Me presionaste");
    console.log(this.FormularioPersonaje.value);
    this.CrudService.AgregarPersonaje(this.FormularioPersonaje.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-personaje/')

    });

  }
  
}


