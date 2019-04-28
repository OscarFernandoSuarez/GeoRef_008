import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VistaMueblePage } from './vista-mueble.page';

const routes: Routes = [
  {
    path: '',
    component: VistaMueblePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VistaMueblePage]
})
export class VistaMueblePageModule {}
