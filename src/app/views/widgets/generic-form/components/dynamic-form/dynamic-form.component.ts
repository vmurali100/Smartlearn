import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { FieldConfig, Validator } from '../../field.interface';

@Component({
  exportAs: 'dynamicForm',
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
    this.onChanges();
  }

  /**  */
  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.submit.emit(val);
    });
  }

  /**  */
  onSubmit(event: Event): any {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.form);
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  /**  */
  createControl(): any {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        { value: field.value, disabled: field.disabled },
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  /**  Bind validations with control */
  bindValidations(validations: any): any {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**  */
  validateAllFormFields(formGroup: FormGroup): any {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
