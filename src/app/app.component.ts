import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Listado Parques',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Mobiliario',
      url: '/list',
      icon: 'list'
    },
    {
      title:'Muebles',
      url: '/mobiliario',
      icon: 'trophy'
    },
    {
      title:'Arboles',
      url: '/arboles',
      icon: 'nutrition'
    },
    {
      title:'VistaMueble',
      url: '/vista-mueble',
      icon: 'logo-xbox'
    },
    {
      title:'Agregar Inventario',
      url: '/agregarinventario',
      icon: 'baseball'
    },
     {
       title:'Validación',
       url: '/validacion',
       icon: 'contact'
     }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
