import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListTasksPage } from './list-tasks.page';
import { ShowModalPage } from '../show-modal/show-modal.page';



const routes: Routes = [
  {
    path: '',
    component: ListTasksPage
  }
];

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ShowModalPage],
  declarations: [ListTasksPage, ShowModalPage]
})
export class ListTasksPageModule {}
