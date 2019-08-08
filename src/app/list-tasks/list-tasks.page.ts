import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { ModalController } from '@ionic/angular';
import { ShowModalPage } from '../show-modal/show-modal.page';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.page.html',
  styleUrls: ['./list-tasks.page.scss'],
})
export class ListTasksPage implements OnInit {

  tasks

  constructor(public taskService: TasksService, public modalctrl: ModalController) {
  }

  ngOnInit() {
    //this.getTasks();
  }

  ionViewDidEnter(){
    this.getTasks();
  }

  async openShowModal(id) {
    let showModal = await this.modalctrl.create({
      component: ShowModalPage,
      componentProps: { id }
    });

    return showModal.present();
  }

  async getTasks() {
    await this.taskService.getAllTasks().subscribe((tasks) => {
      console.log(tasks)
      this.tasks = tasks
    });
  }

}
