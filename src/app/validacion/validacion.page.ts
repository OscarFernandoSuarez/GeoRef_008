import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {
  todo = {
    email : "sipbog@gmail.com",
    pass : "1234"
  }

  constructor(private navCtrl : NavController,
              private toastController : ToastController){}

  ngOnInit(){
  }

  async login(forma : NgForm) {
    if(forma.value.email === this.todo.email && forma.value.password === this.todo.pass )
      this.navCtrl.navigateForward('home');
    else {
      let toast = await this.toastController.create({
          message: 'Sus credenciales no son correctas.',
          duration: 2000,
          position : "middle"
        });
        toast.present();
    }
  }

  login1(){

  }


}
