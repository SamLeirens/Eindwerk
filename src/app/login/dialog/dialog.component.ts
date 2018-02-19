import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  array = new Array();

  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      date: '',
      time: '',
      event: ''
    })
  }

  submit(form) {

    this.array.push(form.value.date);
    this.array.push(form.value.time);
    this.array.push(form.value.event);
    this.dialogRef.close(this.array);
  }
}
