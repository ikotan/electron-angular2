import {Component, Input} from "@angular/core";
import {Tweet} from "../../models/tweet.model";

@Component({
  selector: 'tweet',
  templateUrl: 'app/renderer/components/tweet/tweet.html'
})

export class TweetComponent {

  @Input()
  tweets: Tweet[];

  constructor() {
    console.log("tweet");
  }
}
