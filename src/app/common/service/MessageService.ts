
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';

@Injectable()
export class MessageService {
    alerts: Subject<Message> = new Subject();

    add(message: Message) {
        if(message) {
            this.alerts.next(message);
        }
    }

}
