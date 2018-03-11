import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-4',
  templateUrl: './vraag-4.component.html',
  styleUrls: ['./vraag-4.component.css']
})
export class Vraag4Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag4Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag4Form = this.formBuilder.group({
      "A25": [null, Validators.compose([
        Validators.required])],
      "A26": [null, Validators.compose([
        Validators.required])],
      "A27": [null, Validators.compose([
        Validators.required])],
      "A28": [null, Validators.compose([
        Validators.required])],
      "A29": [null, Validators.compose([
        Validators.required])],
      "A30": [null, Validators.compose([
        Validators.required])],
      "A31": [null, Validators.compose([
        Validators.required])],
      "A32": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag4Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag4Form.valid ? {
                valid: true,
                data: this.vraag4Form.value
              } : {
                valid: false
              });
        }
    );
  }
}
