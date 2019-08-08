import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.page.html',
  styleUrls: ['./show-modal.page.scss'],
})
export class ShowModalPage implements OnInit {

  task
  @Input() id: number;
  constructor(public httpClient: HttpClient,public tasksService: TasksService ,  public modalCtrl: ModalController, public navParams: NavParams) { 
    var id = navParams.get('id');
    this.show(id);
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }
  show(id){
    this.tasksService.showTask(id).subscribe(task => {
      console.log(task);
      this.task = task
    });
  }


}
