import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/mock/tasks';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'ang-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  // [TODO]: 型定義の場所どこにするか決める
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    const taskObservable = this.taskService.getTasks();
    taskObservable.subscribe(
      (data) => {
        console.log(data);
        this.tasks = data.tasks;
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('finished');
      }
    );
  }
}
