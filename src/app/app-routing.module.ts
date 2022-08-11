import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCardComponent } from './pages/task-card/task-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'task-cards', pathMatch: 'full' },
  { path: 'task-cards', component: TaskCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
