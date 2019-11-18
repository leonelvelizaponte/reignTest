import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public articulos;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.llamadaHttp();
  }

  //este metodo lo que hace es remover del arreglo articulos el articulo que seleccionamos
  eliminar(index) {
    console.log("elimine!" + index);
    this.articulos.splice(index, 1);
  }

  //este metodo consulta a mongo por los datos guardados
  llamadaHttp() {
    this.http.get('/conexion/articulos', {
      headers:
      { 'Content-Type': 'application/json' }
    })
      .subscribe(
      res => {
        var data: string;
        console.log(res);
        this.articulos = JSON.parse(JSON.stringify(res));
      },
      err => {
        console.log("Ocurrió un error al pedir todos los articulos");
        console.error(err);
      }
      );
  }

}
