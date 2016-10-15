import {Component, Input} from "@angular/core";
import {TweetComponent} from "../tweet/tweet.component";

@Component({
  selector: 'timeline',
  templateUrl: 'app/renderer/components/timeline/timeline.html'
  directives: [TweetComponent]
})

export class TimelineComponent {
  constructor() {
    console.log("timeline");
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
