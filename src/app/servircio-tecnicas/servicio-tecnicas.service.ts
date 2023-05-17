import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tecnica } from './tecnicas';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/tecnicas.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerTecnica(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
