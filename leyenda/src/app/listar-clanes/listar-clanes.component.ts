import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servicio_clanes/servicio-clanes.service';

@Component({
  selector: 'app-listar-clanes',
  templateUrl: './listar-clanes.component.html',
  styleUrls: ['./listar-clanes.component.css']
})
export class ListarClanesComponent implements OnInit{
  Clanes:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerClanes().subscribe(respuesta=>{
        console.log(respuesta);
        this.Clanes=respuesta;
      });
    }
}
