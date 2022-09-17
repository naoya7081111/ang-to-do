import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public timeList = ['Today', 'Week', 'Month', 'All'] as const;

  constructor() {}

  ngOnInit(): void {}
}
