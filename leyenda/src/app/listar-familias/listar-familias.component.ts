import { Component,OnInit } from '@angular/core';
import { CrudService} from 'src/app/servicio_famia/crud.service';

@Component({
  selector: 'app-listar-familias',
  templateUrl: './listar-familias.component.html',
  styleUrls: ['./listar-familias.component.css']
})
export class ListarFamiliasComponent implements OnInit{
  Familia:any;
  constructor(
    private crudService:CrudService
    ){}
    ngOnInit(): void {
      this.crudService.ObtenerFamilias().subscribe(respuesta=>{
        console.log(respuesta);
        this.Familia=respuesta;
      });
    }
}
