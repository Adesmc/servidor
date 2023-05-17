import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-destacar/servicio-clanes.service';

@Component({
  selector: 'app-listar-destacares',
  templateUrl: './listar-destacares.component.html',
  styleUrls: ['./listar-destacares.component.css']
})
export class ListarDestacaresComponent implements OnInit{
  Destacar:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerDestacar().subscribe(respuesta=>{
        console.log(respuesta);
        this.Destacar=respuesta;
      });
    }
}
