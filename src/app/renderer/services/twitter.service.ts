import {Injectable} from "@angular/core";
// import Twit from "twit";

@Injectable()
export class TwitterService {
  constructor() {
    console.log("twitter searvice");
  }
}

// @Injectable()
// export class TwitterService {

  // todos: Todo[] = [];

  // constructor() {
    // const persistedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    // this.todos = persistedTodos.map(todo => {
      // return new Todo(
        // todo.id,
        // todo.title,
        // todo.isCompleted
      // );
    // });
  // }

  // add(title: string): void {
    // let newTodo = new Todo(
      // Math.floor(Math.random() * 100000),
      // title,
      // false
    // );

    // this.todos.push(newTodo);
    // this.save();
  // }

  // remove(): void {}

  // toggleComplate(): void {}

  // getCompletedCount(): number {
    // return this.todos.filter(todo => todo.isCompleted).length;
  // }

  // private save(): void {
    // console.log('saving : ', this.todos);
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  // }
// }

