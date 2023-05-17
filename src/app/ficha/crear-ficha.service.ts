import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ficha } from './ficha';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/crear_ficha.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerClanes(){
    return this.persoanjeHttp.get(this.API as any);
  }
}

export class Fanilia {
  API:String='http://localhost/Leyenda/leyenda-main/familia_ficha.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerFamilias(){
    return this.persoanjeHttp.get(this.API as any);
  }
}
