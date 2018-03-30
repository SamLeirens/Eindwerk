import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogComponent} from "../../login/dialog/dialog.component";


@Component({
  selector: 'timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.css']
})
export class TimesheetsComponent implements OnInit {

  form: FormGroup;
  array = new Array();

  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: '',
      startHour: '',
      endHour: '',
      event: ''
    })
  }

  submit(form) {
    this.array.push(form.value.date);
    this.array.push(form.value.startHour);
    this.array.push(form.value.endHour);
    this.array.push(form.value.event);
    this.dialogRef.close(this.array);
  }
}
