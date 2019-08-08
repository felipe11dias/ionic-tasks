import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddingModalPage } from './adding-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddingModalPage
  }
];

@NgModule({
  exports: [AddingModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AddingModalPageModule {}
