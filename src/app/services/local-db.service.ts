import { inject, Injectable } from '@angular/core';
import { task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {

  load():task[]{
    let tasks = localStorage.getItem('tasks');
    if (tasks){
      return JSON.parse(tasks);
    }else{
      return [];
    }
  }

  save(tasks:task[]){
    localStorage.
    setItem('tasks',JSON.stringify(tasks));
  }
}
