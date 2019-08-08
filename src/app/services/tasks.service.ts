import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(public httpClient: HttpClient, public modalctrl: ModalController) {
  }

  updateTask(id, title, done){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let header = {
      headers: headers
    }

    let body = {
      "title": title,
      "done": done
    }

    return this.httpClient.put(`http://localhost:3000/tasks/${id}`, body, header)
  }

  removeTask(id){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let header = {
      headers: headers
    }
    return this.httpClient.delete(`http://localhost:3000/tasks/${id}`, header);
  }

  getAllTasks(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json' );

    let header = {
      headers : headers
    }

    return this.httpClient.get(`http://localhost:3000/tasks/`, header)
  }

  showTask(id){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json' );

    let header = {
      headers : headers
    }

    return this.httpClient.get(`http://localhost:3000/tasks/${id}`, header)
  }

  createTask (title, done){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json' );

    let header = {
      headers: headers
    }

    let body = {
      "title": title,
      "done": done
    }

    return this.httpClient.post("http://localhost:3000/tasks", body, header)
  }

}

