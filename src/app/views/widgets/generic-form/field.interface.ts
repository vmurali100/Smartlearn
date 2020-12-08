export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface FieldConfig {
  type: string;
  label?: string;
  placeHolder?: string;
  hint?: string;
  disabled: boolean;
  value?: string;
  inputType?: string;
  name?: string;
  options?: string[];
  collections?: any;
  validations?: Validator[];
}
