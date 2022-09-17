import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tasks } from '../mock/tasks';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get('/api/v1/tasks');
  }
}
