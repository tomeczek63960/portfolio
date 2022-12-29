import React, { useRef, useState, FC, SyntheticEvent } from "react";
import Input from "src/ui/FormComponent/Input";
import ButtonComponent from "src/ui/Button";
import {
  nameValidation,
  emailValidation,
  surnameValidation,
  phoneValidation,
} from "src/helpers/validations";
import { StyledForm } from "./style";
// TODO: add animation on scroll for inputs
const FormComponent: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormDirty, setFormDirty] = useState(false);
  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    setFormDirty(true);
    setTimeout(
      () =>
        formRef.current
          ?.querySelector<HTMLInputElement>("input.error")
          ?.focus(),
      500
    );
  };
  return (
    <StyledForm ref={formRef} onSubmit={onSubmit}>
      <Input
        isFormDirty={isFormDirty}
        type="text"
        placeholder="Imię"
        validation={nameValidation}
      />
      <Input
        isFormDirty={isFormDirty}
        type="text"
        placeholder="Nazwisko"
        validation={surnameValidation}
      />
      <Input
        isFormDirty={isFormDirty}
        type="text"
        placeholder="E-mail"
        validation={emailValidation}
      />
      <Input
        isFormDirty={isFormDirty}
        type="text"
        placeholder="Numer Telefonu"
        validation={phoneValidation}
      />
      <ButtonComponent>Submit form</ButtonComponent>
    </StyledForm>
  );
};

export default FormComponent;
