import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CrudService} from 'src/app/ficha/crear-ficha.service';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-crear-ficha',
  templateUrl: './crear-ficha.component.html',
  styleUrls: ['./crear-ficha.component.css']
})
export class CrearFichaComponent implements OnInit{
  Clan:any;
  nombre: string = '';
  Clanes: string = '';
  tablaCreada: boolean = false;
  
    crearTabla(): void {
      this.tablaCreada = true;
    }

  constructor(
    private crudService:CrudService) {}
  
  
    ngOnInit(): void {
    this.crudService.ObtenerClanes().subscribe((respuesta)=>{
      console.log(respuesta);
      this.Clan=respuesta;
    });

  }

    
  
  
  @ViewChild('htmlData') htmlData!: ElementRef;
  

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla-container'); //Crea el archivo a partir de tabla-container
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Tabla personajes.pdf'); //Nombre del archivo
    });

    
  }

    

}