import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { escuela } from './escuela';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/escuela.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerEscuela(){
    return this.persoanjeHttp.get(this.API as any);
  }

}

