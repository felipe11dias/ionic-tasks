import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController, NavParams } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.page.html',
  styleUrls: ['./remove-modal.page.scss'],
})
export class RemoveModalPage implements OnInit {
  // Variavel para obter id.
  id
  constructor(public httpClient: HttpClient, public taskService: TasksService, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  remove(id){
    this.taskService.removeTask(id).subscribe(task => {
      console.log(task);
    });
  }

}
