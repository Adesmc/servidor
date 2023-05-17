import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trasfondo } from './trasfondo';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/trasfondo.php';
  constructor(private persoanjeHttp:HttpClient) { }


  ObtenerTrasfondo(){
    return this.persoanjeHttp.get(this.API as any);
  }

}
