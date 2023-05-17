import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-habilidades/servicio-habilidades.service';

@Component({
  selector: 'app-listar-habilidades',
  templateUrl: './listar-habilidades.component.html',
  styleUrls: ['./listar-habilidades.component.css']
})
export class ListarHabilidadesComponent implements OnInit{
  habilidades:any;
  
  
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerHabilidad().subscribe(respuesta=>{
        console.log(respuesta);
        this.habilidades=respuesta;
      });
    }
}