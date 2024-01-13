import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { GestionStorageService } from 'src/app/services/capacitor-preference.service';
import { GestionNoticiasLeerService } from 'src/app/services/gestion-noticias-leer.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionNoticiasLeer: GestionNoticiasLeerService,public gestionNoticias: GestionStorageService) {
    // Inicializo la vista de los articulos para leer
    let datos: Promise<Article[]> = gestionNoticias.getObject("noticias");

    datos.then(dat=>{
      gestionNoticiasLeer.leerNoticias.push(...dat);
    })
  }

}
