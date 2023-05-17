import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { destacar } from './destacar';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/destacar.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerDestacar(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
