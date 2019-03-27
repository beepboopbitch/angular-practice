import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

  export class TaskListComponent {
    @Input() childTaskList: Task[];


  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "text-danger";
    } else if (currentTask.priority === 2) {
      return  "text-warning";
    } else {
      return "text-info";
    }
  }
}