import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddingModalPage } from '../adding-modal/adding-modal.page';
import { RemoveModalPage } from '../remove-modal/remove-modal.page';
import { UpdateModalPage } from '../update-modal/update-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public modalctrl: ModalController) {}

  async openAddingModal() {
      let addModal = await this.modalctrl.create({
        component: AddingModalPage
      });
      return addModal.present();
    }

  async openRemoveModal(id) {
      let rmvModal = await this.modalctrl.create({
        component: RemoveModalPage,
        componentProps: { id }
      });
      return rmvModal.present();
    }

    async openUpdateModal() {
      let updModal = await this.modalctrl.create({
        component: UpdateModalPage
      });
      return updModal.present();
    }

}
