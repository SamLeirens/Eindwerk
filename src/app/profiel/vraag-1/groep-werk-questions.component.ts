import {Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'groep-werk-questions',
  templateUrl: './groep-werk-questions.component.html',
  styleUrls: ['./groep-werk-questions.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class GroepWerkQuestionsComponent implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag1Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag1Form = this.formBuilder.group({
      "A1": [null, Validators.compose([
        Validators.required])],
      "A2": [null, Validators.compose([
        Validators.required])],
      "A3": [null, Validators.compose([
        Validators.required])],
      "A4": [null, Validators.compose([
        Validators.required])],
      "A5": [null, Validators.compose([
        Validators.required])],
      "A6": [null, Validators.compose([
        Validators.required])],
      "A7": [null, Validators.compose([
        Validators.required])],
      "A8": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag1Form.valueChanges.subscribe(
      () => {
        this.onChange.emit(this.vraag1Form.valid ? {
          valid: true,
          data: this.vraag1Form.value
        } : {
          valid: false
        });
      }
    );
  }
}
