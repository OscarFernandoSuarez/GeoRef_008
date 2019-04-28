import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2g5cFRZ6Cr6ozLb9hv6kow_Id066HQmo'
    })
  ],
  declarations: [ListPage]
})
export class ListPageModule {
  constructor(){}

}
