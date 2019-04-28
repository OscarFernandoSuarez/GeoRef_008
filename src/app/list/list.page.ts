import { Component, OnInit } from '@angular/core';
import { Marcador } from '../class/marcador';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private elementos = [
    "Numero sillas",
    "Numero columpios",
    "Numero de canecas",
    "Kilometros de Senderos",
    "Numero de xdfad",
    "Numero de plantas",
    "Numero de cacharrros",
    "Numero de vainas",
    "Numero de objetos",
    "Numero de aves"
  ];

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

  public items: Array<{ title: string; note: string; icon: string}> = [];

  constructor(private storage: Storage) {

    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: this.elementos[i],
        icon: this.icons[i]
        });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

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
