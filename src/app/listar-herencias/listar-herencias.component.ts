import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-herencia/servicio-herencia.service';


@Component({
  selector: 'app-listar-herencias',
  templateUrl: './listar-herencias.component.html',
  styleUrls: ['./listar-herencias.component.css']
})
export class ListarHerenciasComponent implements OnInit{
  Herencia:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerHerencia().subscribe(respuesta=>{
        console.log(respuesta);
        this.Herencia=respuesta;
      });
    }
}
