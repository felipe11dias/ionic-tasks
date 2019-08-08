import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddingModalPage } from '../adding-modal/adding-modal.page';
import { RemoveModalPage } from '../remove-modal/remove-modal.page';
import { UpdateModalPage } from '../update-modal/update-modal.page';


@NgModule({
  imports: [
CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents: [AddingModalPage, RemoveModalPage, UpdateModalPage],
  declarations: [HomePage, AddingModalPage, RemoveModalPage, UpdateModalPage]
})
export class HomePageModule {}
