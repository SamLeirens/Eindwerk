import {Component, OnInit} from '@angular/core';
import {GrowlModule} from 'primeng/growl';
import {Message} from "./common/service/Message";
import {MessageService} from "./common/service/MessageService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  msgs: Message[] = [];

  data: any;

  constructor(private messageService : MessageService) {
  }

  ngOnInit(): void {


    this.messageService.alerts.subscribe((alert)=> this.msgs.push({severity:alert.severity, summary:alert.summary, detail:alert.detail}));
  }



}
