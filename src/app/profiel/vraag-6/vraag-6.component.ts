import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-6',
  templateUrl: './vraag-6.component.html',
  styleUrls: ['./vraag-6.component.css']
})
export class Vraag6Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag6Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag6Form = this.formBuilder.group({
      "A41": [null, Validators.compose([
        Validators.required])],
      "A42": [null, Validators.compose([
        Validators.required])],
      "A43": [null, Validators.compose([
        Validators.required])],
      "A44": [null, Validators.compose([
        Validators.required])],
      "A45": [null, Validators.compose([
        Validators.required])],
      "A46": [null, Validators.compose([
        Validators.required])],
      "A47": [null, Validators.compose([
        Validators.required])],
      "A48": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag6Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag6Form.valid ? {
                valid: true,
                data: this.vraag6Form.value
              } : {
                valid: false
              });
        }
    );
  }
}
