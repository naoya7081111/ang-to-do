import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TaskCardComponent } from './pages/task-card/task-card.component';
import { TaskService } from './shared/task.service';
import { TaskListComponent } from './pages/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TaskCardComponent,
    TaskListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
