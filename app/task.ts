import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSource = new BehaviorSubject<{ taskName: string; isDone: boolean }[]>([
    { taskName: 'Brush teeth', isDone: false },
    { taskName: 'Workout', isDone: false },
    { taskName: 'Make the bed', isDone: false },
  ]);

  tasks$ = this.tasksSource.asObservable();

  addTask(taskName: string) {
    const current = this.tasksSource.value;
    this.tasksSource.next([...current, { taskName, isDone: false }]);
  }

  deleteTask(index: number) {
    const current = this.tasksSource.value;
    current.splice(index, 1);
    this.tasksSource.next([...current]);
  }

  toggleTask(index: number) {
    const current = this.tasksSource.value;
    current[index].isDone = !current[index].isDone;
    this.tasksSource.next([...current]);
  }
}
