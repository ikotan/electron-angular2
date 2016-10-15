import {Component, Input} from "@angular/core";
import {TweetComponent} from "../tweet/tweet.component";
import {Tweet} from "../../models/tweet.model";

@Component({
  selector: 'timeline',
  templateUrl: 'app/renderer/components/timeline/timeline.html',
  directives: [TweetComponent]
})

export class TimelineComponent {

  @Input()
  tweets: Tweet[];

  constructor() {
    console.log("timeline");
  }
}
