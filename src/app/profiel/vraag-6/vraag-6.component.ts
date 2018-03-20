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
      "A41": ['1', Validators.compose([
        Validators.required])],
      "A42": ['1', Validators.compose([
        Validators.required])],
      "A43": ['1', Validators.compose([
        Validators.required])],
      "A44": ['1', Validators.compose([
        Validators.required])],
      "A45": ['1', Validators.compose([
        Validators.required])],
      "A46": ['1', Validators.compose([
        Validators.required])],
      "A47": ['1', Validators.compose([
        Validators.required])],
      "A48": ['1', Validators.compose([
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
