import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { familias } from './familias';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/familias.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerFamilias(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
