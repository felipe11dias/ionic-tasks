import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-adding-modal',
  templateUrl: './adding-modal.page.html',
  styleUrls: ['./adding-modal.page.scss'],
})

export class AddingModalPage implements OnInit {
  title;
  done;

  constructor(public httpClient: HttpClient,public taskService: TasksService, public modalCtrl: ModalController, public toastController: ToastController) {
  }
  ngOnInit() {
  }

  
  toast;
  // Mensagens de feedback
  showToast() {
    this.toast = this.toastController.create({
      message: 'Task created with success',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'X',
      animated:true,
      cssClass:"my-custom-class"
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast(){
    this.toast = this.toastController.dismiss();
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  postTask(title, done){
    this.taskService.createTask(title, done).toPromise().then(data => {
      console.log(data);
      console.log(title, done);
      this.showToast();
      this.closeModal();
    });
  }
}
