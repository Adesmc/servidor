import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-escuela/servicio-escuela.service';

@Component({
  selector: 'app-listar-escuelas',
  templateUrl: './listar-escuelas.component.html',
  styleUrls: ['./listar-escuelas.component.css']
})
export class ListarEscuelasComponent implements OnInit{
  Escuela:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerEscuela().subscribe(respuesta=>{
        console.log(respuesta);
        this.Escuela=respuesta;
      });
    }
}
