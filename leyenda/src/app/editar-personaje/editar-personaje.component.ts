import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from '../servicio/crud.service';


@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.component.html',
  styleUrls: ['./editar-personaje.component.css']
})
export class EditarPersonajeComponent implements OnInit{
  FormularioPersonaje:FormGroup;



  id_personaje:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ){ 
    this.id_personaje=this.activeRoute.snapshot.paramMap.get('id_personaje');
    console.log(this.id_personaje);
    this.crudService.ObtenerPersonaj(this.id_personaje).subscribe(respuesta=>{
      console.log(respuesta);
      this.FormularioPersonaje.setValue({
        id_personaje:respuesta[0]['id_personaje'],
        Familia:respuesta[0]['Familia'],
        Clan:respuesta[0]['Clan'],
        Escuela:respuesta[0]['Escuela'],
        nombre:respuesta[0]['nombre'],
        Herencia:respuesta[0]['Herencia'],
        Destacar:respuesta[0]['Destacar']
      })
    });
    this.FormularioPersonaje=this.formulario.group({
      id_personaje:[''],
      Familia:[''],
      Clan:[''],
      Escuela:[''],
      nombre:[''],
      Herencia:[''],
      Destacar:['']
    })
  }

    ngOnInit(): void {


   
  }
  enviarDatos():any{
    console.log(this.id_personaje);
    console.log(this.FormularioPersonaje.value);
    this.crudService.EditarPersonaje(this.id_personaje,this.FormularioPersonaje.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-personaje')

    })
  }

}
