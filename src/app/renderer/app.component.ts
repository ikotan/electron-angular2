import {Component} from "@angular/core";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {TwitterService} from "./services/twitter.service";
// import {Todo} from "./models/todo.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app/renderer/app.html',
  // providers: [TodoService],
  directives: [TimelineComponent]
})
export class AppComponent {

  constructor() {
    console.log("app component");
  }
}
