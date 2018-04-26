import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class NotificationService {
  busy: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  start() {
    this.counter += 1;
    this.busy.next(true);
  }

  stop() {

    this.counter -= 1;

    if (this.counter < 0) {
      this.counter = 0;
    }

    this.busy.next(this.counter > 0);
  }
}
