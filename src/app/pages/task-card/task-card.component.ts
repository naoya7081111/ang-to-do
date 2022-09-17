import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/mock/tasks';

import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'ang-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input()
  task!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
