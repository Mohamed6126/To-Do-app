import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoForm } from './todo-form/todo-form';
import { TodoList } from "./todo-list/todo-list";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoForm , TodoList, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task1');
}
