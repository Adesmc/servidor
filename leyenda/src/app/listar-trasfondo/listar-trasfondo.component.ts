import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servircio-trasfondo/servicio-trasfondo.service';

@Component({
  selector: 'app-listar-trasfondo',
  templateUrl: './listar-trasfondo.component.html',
  styleUrls: ['./listar-trasfondo.component.css']
})
export class ListarTrasfondoComponent implements OnInit{
  Trasfondo:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerTrasfondo().subscribe(respuesta=>{
        console.log(respuesta);
        this.Trasfondo=respuesta;
      });
    }
}
