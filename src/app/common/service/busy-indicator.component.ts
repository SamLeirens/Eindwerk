import {Component, OnInit} from "@angular/core";
import {NotificationService} from "./notification.service";

@Component({
  moduleId: module.id,
  selector: 'mob-busy-indicator',
  template: `
        <div class="loading" [hidden]="!busy">
            <div class="spinner"></div>
        </div>
    `,
  styleUrls: ['busy-indicator.component.css']
})
export class BusyIndicatorComponent implements OnInit {
  busy: boolean;

  constructor(private notificationService: NotificationService) {
    this.busy = false;
  }

  ngOnInit() {
    this.notificationService.busy.subscribe((isBusy: boolean) => this.busy = isBusy);
  }
}
