import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'vraag-3',
  templateUrl: './vraag-3.component.html',
  styleUrls: ['./vraag-3.component.css']
})
export class Vraag3Component implements OnInit {
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  vraag3Form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.vraag3Form = this.formBuilder.group({
      "A17": [null, Validators.compose([
        Validators.required])],
      "A18": [null, Validators.compose([
        Validators.required])],
      "A19": [null, Validators.compose([
        Validators.required])],
      "A20": [null, Validators.compose([
        Validators.required])],
      "A21": [null, Validators.compose([
        Validators.required])],
      "A22": [null, Validators.compose([
        Validators.required])],
      "A23": [null, Validators.compose([
        Validators.required])],
      "A24": [null, Validators.compose([
        Validators.required])],
    });

    this.vraag3Form.valueChanges.subscribe(
        () => {
          this.onChange.emit(this.vraag3Form.valid ? {
                valid: true,
                data: this.vraag3Form.value
              } : {
                valid: false
              });
        }
    );
  }
}
