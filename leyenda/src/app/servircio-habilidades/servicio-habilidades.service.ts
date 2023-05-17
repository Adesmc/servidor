import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { habilidades } from './habilidades';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/habilidad.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerHabilidad(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
