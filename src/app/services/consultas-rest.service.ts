import { Injectable } from '@angular/core';
import { Article, RespuestaNoticias } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasRestService {
  listaNoticiasRest: Article[]=[];

  constructor(private servidorRest: HttpClient) { }

  /**
   * Metodo para hacer la consulta GET
   * @param con el evento del boton pulsado, opcional.
   */
  consultaGet(ev?: any){
    this.listaNoticiasRest.length = 0;
    let nombre:string = ev ? ev.detail.value: 'valorPorDefecto';
    let observableRest: Observable<RespuestaNoticias> = this.servidorRest.get<RespuestaNoticias>("https://newsapi.org/v2/top-headlines?category=" + nombre.toLowerCase() + "&apiKey=6c0dcd88f6714d90a3501ded1d094800");

    observableRest.subscribe(datos=>{
      console.log(datos);
      this.listaNoticiasRest.push(...datos.articles);
    })
  }

}
