import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogComponent} from "../../../login/dialog/dialog.component";

@Component({
  selector: 'add-board-story',
  templateUrl: './add-board-story.component.html',
  styleUrls: ['./add-board-story.component.css']
})
export class AddBoardStoryComponent implements OnInit {

  form: FormGroup;
  array = new Array();

  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      subject: '',
      user: '',
    })
  }

  submit(form) {
    this.array.push(form.value.subject);
    this.array.push(form.value.user);
    this.dialogRef.close(this.array);
  }
}
