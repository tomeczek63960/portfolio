export interface PropsInput {
  type: string;
  name: string;
  placeholder: string;
  validation: Function;
  isFormDirty: boolean;
  value: string;
  onChange: Function;
  onClear: boolean;
  inputType?: string;
}
