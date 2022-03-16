import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { ToDo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: ToDo[] = [
    new ToDo(Guid.create(), 'Prepare for Presentation', false),
    new ToDo(Guid.create(), 'Hit the gym', false),
  ];

  onSubmit(form: NgForm) {
    let todo = new ToDo(Guid.create(), form.value.title, false);
    this.todos.push(todo);
    form.resetForm();
  }

  onComplete(id: Guid) {
    let todo = this.todos.filter((x) => x.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid) {
    let todo = this.todos.filter((x) => x.id === id)[0];
    let index = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
