import { Component, OnInit } from '@angular/core';

import { tasks, Task } from 'src/app/mock/tasks';

@Component({
  selector: 'ang-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  tasks = tasks;

  constructor() {}

  ngOnInit(): void {}
}
