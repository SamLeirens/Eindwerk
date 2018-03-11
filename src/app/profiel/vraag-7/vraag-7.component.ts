import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-7',
  templateUrl: './vraag-7.component.html',
  styleUrls: ['./vraag-7.component.css']
})
export class Vraag7Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag7Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag7Form = this.formBuilder.group({
      "A49": [null, Validators.compose([
        Validators.required])],
      "A50": [null, Validators.compose([
        Validators.required])],
      "A51": [null, Validators.compose([
        Validators.required])],
      "A52": [null, Validators.compose([
        Validators.required])],
      "A53": [null, Validators.compose([
        Validators.required])],
      "A54": [null, Validators.compose([
        Validators.required])],
      "A55": [null, Validators.compose([
        Validators.required])],
      "A56": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag7Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag7Form.valid ? {
                valid: true,
                data: this.vraag7Form.value
              } : {
                valid: false
              });
        }
    );
  }

}
