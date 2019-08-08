import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.page.html',
  styleUrls: ['./update-modal.page.scss'],
})
export class UpdateModalPage implements OnInit {
  id;
  title;
  done = false;
  constructor(public taskService: TasksService ,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  update(id, title, done){
    this.taskService.updateTask(id, title, done).subscribe( (res) =>{
      this.closeModal();
      console.log(res);
    })
  }

}
