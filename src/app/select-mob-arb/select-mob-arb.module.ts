import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectMobArbPage } from './select-mob-arb.page';

const routes: Routes = [
  {
    path: '',
    component: SelectMobArbPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectMobArbPage]
})
export class SelectMobArbPageModule {}
