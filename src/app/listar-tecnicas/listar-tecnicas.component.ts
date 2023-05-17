import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-tecnicas/servicio-tecnicas.service';

@Component({
  selector: 'app-listar-tecnicas',
  templateUrl: './listar-tecnicas.component.html',
  styleUrls: ['./listar-tecnicas.component.css']
})
export class ListarTecnicasComponent implements OnInit{
  Tecnica:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerTecnica().subscribe(respuesta=>{
        console.log(respuesta);
        this.Tecnica=respuesta;
      });
    }
}
