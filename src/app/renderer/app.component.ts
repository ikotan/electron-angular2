import {Component} from "@angular/core";
import {TimelineComponent} from "./components/timeline/timeline.component";
import {Tweet} from "./models/tweet.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app/renderer/app.html',
  directives: [TimelineComponent]
})
export class AppComponent {

  tweets: Tweet[];

  constructor() {
    this.tweets = [
      {
        "text": "tweet test1"
      },
      {
        "text": "tweet test2"
      }
    ];
    console.log(this.tweets);
  }
}
