import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servicio/crud.service'; //Importaten importar el servicio de crub service para que envie 
                                                            //la informacion obtenida de la API 

@Component({
  selector: 'app-listar-personaje',
  templateUrl: './listar-personaje.component.html',
  styleUrls: ['./listar-personaje.component.css']
})

export class ListarPersonajeComponent implements OnInit{

  Personaje:any; //creamos la variable personaje

constructor(
private crudService:CrudService
){}

ngOnInit(): void {
  this.crudService.ObtenerPersonaje().subscribe(respuesta=>{ //Metemos toda la informacion en la variable personaje
    console.log(respuesta);
    this.Personaje=respuesta;
  });
}
BorrarRegistro(id_personaje:any,iControl:any){
  console.log(id_personaje);
  console.log(iControl);

  if(window.confirm("¿Borrar el personaje?")){ //Alerta para preguntar si de verdad se quiere borrar el personaje

    this.crudService.BorrarPersonaje(id_personaje).subscribe((respuesta)=>{
      this.Personaje.splice(iControl,1);
    
    });
  }
  
}

}
