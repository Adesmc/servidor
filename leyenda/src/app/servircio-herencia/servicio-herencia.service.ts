import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { herencia } from './herencia';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/herencia.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerHerencia(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
