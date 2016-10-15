import {Component, Input} from "@angular/core";

@Component({
  selector: 'tweet',
  templateUrl: 'app/renderer/components/tweet/tweet.html'
})

export class TweetComponent {
  constructor() {
    console.log("tweet");
  }
}

// import {Component, Input} from "@angular/core";
// import {Todo} from "../../models/todo.model";

// @Component({
  // selector: 'todo-content',
  // templateUrl: 'app/renderer/components/content/content.html'
// })
// export class TodoContentComponent {

  // @Input()
  // todos: Todo[];

  // constructor() {
    // console.log(this.todos);
    // this.todos = this.todos || [];
  // }
// }
