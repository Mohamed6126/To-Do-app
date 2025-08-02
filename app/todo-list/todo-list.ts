import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoList implements OnInit {
  taskArray: { taskName: string; isDone: boolean }[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.taskArray = tasks;
    });
  }

  toggle(index: number) {
    this.taskService.toggleTask(index);
  }

  remove(index: number) {
    this.taskService.deleteTask(index);
  }
}
