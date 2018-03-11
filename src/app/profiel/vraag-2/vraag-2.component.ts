import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-2',
  templateUrl: './vraag-2.component.html',
  styleUrls: ['./vraag-2.component.css']
})
export class Vraag2Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag2Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag2Form = this.formBuilder.group({
      "A9": [null, Validators.compose([
        Validators.required])],
      "A10": [null, Validators.compose([
        Validators.required])],
      "A11": [null, Validators.compose([
        Validators.required])],
      "A12": [null, Validators.compose([
        Validators.required])],
      "A13": [null, Validators.compose([
        Validators.required])],
      "A14": [null, Validators.compose([
        Validators.required])],
      "A15": [null, Validators.compose([
        Validators.required])],
      "A16": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag2Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag2Form.valid ? {
                valid: true,
                data: this.vraag2Form.value
              } : {
                valid: false
              });
        }
    );
  }
}
