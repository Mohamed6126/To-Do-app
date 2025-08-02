import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { TaskService } from '../task';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
  standalone: true
})
export class TodoForm implements OnInit {
  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void{
    
  }
  
  onSubmit(form: NgForm) {
    const taskName = form.value.task;
    if (taskName) {
      this.taskService.addTask(taskName);  
      form.reset(); 
    }
  }
}
