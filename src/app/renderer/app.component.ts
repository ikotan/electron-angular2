import {Component} from "@angular/core";
import {TodoHeaderComponent} from "./components/header/header.component";
import {TodoContentComponent} from "./components/content/content.component";
import {TodoFooterComponent} from "./components/footer/footer.component";
import {TodoService} from "./services/todo.service";
import {Todo} from "./models/todo.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app/renderer/app.html',
  providers: [TodoService],
  directives: [TodoHeaderComponent, TodoContentComponent, TodoFooterComponent]
})
export class AppComponent {

  todos: Todo[];

  constructor(private service: TodoService) {
    this.todos = this.service.todos;
  }
}
