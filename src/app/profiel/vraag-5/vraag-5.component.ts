import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-5',
  templateUrl: './vraag-5.component.html',
  styleUrls: ['./vraag-5.component.css']
})
export class Vraag5Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag5Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag5Form = this.formBuilder.group({
      "A33": [null, Validators.compose([
        Validators.required])],
      "A34": [null, Validators.compose([
        Validators.required])],
      "A35": [null, Validators.compose([
        Validators.required])],
      "A36": [null, Validators.compose([
        Validators.required])],
      "A37": [null, Validators.compose([
        Validators.required])],
      "A38": [null, Validators.compose([
        Validators.required])],
      "A39": [null, Validators.compose([
        Validators.required])],
      "A40": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag5Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag5Form.valid ? {
                valid: true,
                data: this.vraag5Form.value
              } : {
                valid: false
              });
        }
    );
  }
}
