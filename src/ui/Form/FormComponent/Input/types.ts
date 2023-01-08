export interface PropsInput {
  type: string;
  name: string;
  placeholder: string;
  validation: Function;
  isFormDirty: boolean;
  value: string;
  onChange: Function;
  inputType?: string;
}

export type TFormInputTextarea = HTMLInputElement | HTMLTextAreaElement;

export interface IValidationResult {
  valid: boolean;
  msg?: string;
}
