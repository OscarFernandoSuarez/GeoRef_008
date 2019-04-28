import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  parques : any []=[
    {
    Name : "Parque Simon Bolivar",
    Description : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
    foto: "parqueSimonBolivar.jpg"
     },
     {
       Name:"Parque de los Novios",
       Description: "Este es el parque de los Novios",
       foto:"parqueNovios.jpg"
     },
     {
       Name:"Parque el Country",
       Description: "Este es el parque del Country",
       foto: "elCountry.jpg"
     },
     {
       Name:"Parque Tercer Milenio",
       Description: "Este es el Parque Tercer Mileno",
       foto: "tercer_milenio.jpg"
     },
     {
       Name:"Parque El Tunal",
       Description: "Este es el Parque El Tunal",
       foto: "elTunal.jpg"
     },
     {
       Name:"Parque San Cristobal",
       Description: "Este es el Parque San Cristobal",
       foto: "parqueSanCristobal.jpg"
     }

  ]
  constructor(
    public navController : NavController,
  )
  {}


  selectionPark(){
    this.navController.navigateForward('agregarinventario');
  }
  

}
