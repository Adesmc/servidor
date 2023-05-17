import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { personaje } from './persoanje';

@Injectable({
  providedIn: 'root'
})
export class CrudService { //Enlace que usa un archivo php como API
  API:String='http://localhost/Leyenda/leyenda-main/personaje.php';

  constructor(private persoanjeHttp:HttpClient) { }
     
  
  ObtenerPersonaje(){ //Funcion que obtiene los personajes para la tabla
    return this.persoanjeHttp.get(this.API as any);
  }

  AgregarPersonaje(datosPersonaje:personaje):Observable<any>{
    return this.persoanjeHttp.post(this.API+"?insertar=1",datosPersonaje);
}


  BorrarPersonaje(id_personaje:any):Observable<any>{
    return this.persoanjeHttp.get(this.API+"?borrar="+id_personaje);
}
  ObtenerPersonaj(id_personaje:any):Observable<any>{
    return this.persoanjeHttp.get(this.API+"?consultar_personaje="+id_personaje);
}


  EditarPersonaje(id_personaje:any,datosPersonaje:any):Observable<any>{
    return this.persoanjeHttp.post(this.API+"?actualizar="+id_personaje,datosPersonaje);
}
}