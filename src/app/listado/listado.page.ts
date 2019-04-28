import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Marcador } from '../class/marcador';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  marcadores : Marcador[] = [];
  lat = 4.60972222222;  
  lng = -74.0816666667;
  paths: Array<any> = [];
  polygon = false;
  latA : number;
  latB : number;
  lngA : number;
  lngB : number;
  polyline = false;

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  agregarMarcador(evento){
    console.log(evento);
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);
    const nuevoMarcador = new Marcador(parseFloat(evento.coords.lat), parseFloat(evento.coords.lng));
    this.marcadores.push(nuevoMarcador);
    this.storage.set('marker', JSON.stringify(this.marcadores) );
    console.log(this.marcadores.length);
     if(this.marcadores.length>=3){
      this.paths=this.marcadores;
      this.polygon=true;
     if(this.marcadores.length==4)
      {
        this.latA = parseFloat(evento.coords.lat);
        this.lngA = parseFloat(evento.coords.lng);
      }
     if(this.marcadores.length==5)
     {
       this.latB = parseFloat(evento.coords.lat);
       this.lngB = parseFloat(evento.coords.lng);
       this.polyline = true;
     }
    }
  }

}
