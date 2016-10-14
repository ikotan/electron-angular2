import {Injectable} from "@angular/core";
import {Todo} from "../models/todo.model";

const STORAGE_KEY = 'angular2-todo';

@Injectable()
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    const persistedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    this.todos = persistedTodos.map(todo => {
      return new Todo(
        todo.id,
        todo.title,
        todo.isCompleted
      );
    });
  }

  add(title: string): void {
    let newTodo = new Todo(
      Math.floor(Math.random() * 100000),
      title,
      false
    );

    this.todos.push(newTodo);
    this.save();
  }

  remove(): void {}

  toggleComplate(): void {}

  getCompletedCount(): number {
    return this.todos.filter(todo => todo.isCompleted).length;
  }

  private save(): void {
    console.log('saving : ', this.todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }
}

