import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GroepService } from './../groep.service';
import { Timesheet } from './../../models/Timesheet';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {isNullOrUndefined} from "util";
import {DialogComponent} from "../../login/dialog/dialog.component";
import {AddBoardStoryComponent} from "./add-board-story/add-board-story.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {KanbanStory} from "../../models/KanbanStory";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  fileNameDialogRef: MatDialogRef<AddBoardStoryComponent>;
  timesheets: Timesheet[];
  groepNaam:string;
  list2:Timesheet[] = [];
  coding:KanbanStory[]=[];
  codingDone:KanbanStory[]=[];
  newStory:KanbanStory;

  constructor(
    private _groepservice: GroepService,
    private route:ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.groepNaam = params["naam"];
    });
  }

  sourceToTarget(event:any)
  {
    console.log(event);
    console.log(this.list2);
  }

  targetToSource(event:any)
  {
    console.log(event);
d    console.log(this.list2);
  }

  addKanbanStory(user,subject) {
    this.newStory = new KanbanStory(
      user,
      subject,
      this.groepNaam
    );

/*
    this._groepservice.addTimesheetItem(this.newTimesheet).subscribe(() => {});
*/

    if (this.newStory.subject != null) {
      this.coding.push(this.newStory);
    }
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(AddBoardStoryComponent, {
      height: "400px",
      width: "600px"
    });

    this.fileNameDialogRef.afterClosed().subscribe(event => {
      if (!isNullOrUndefined(event)) {
        if (!isNullOrUndefined(event[0])) {
          this.addKanbanStory(event[1],event[0]);
        }
      }
    });
  }

}
