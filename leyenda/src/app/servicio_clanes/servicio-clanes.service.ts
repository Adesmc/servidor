import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { clanes } from './clanes';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:String='http://localhost/Leyenda/leyenda-main/clan.php';
  constructor(private persoanjeHttp:HttpClient) { }

  
  ObtenerClanes(){
    return this.persoanjeHttp.get(this.API as any);
  }


  
}
