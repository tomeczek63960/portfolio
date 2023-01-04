import React, { useRef, useState, FC, SyntheticEvent } from "react";
import Input from "src/ui/Form/FormComponent/Input";
import ButtonComponent from "src/ui/Button";
import {
  nameValidation,
  emailValidation,
  surnameValidation,
  phoneValidation,
} from "src/helpers/validations";
import { StyledForm } from "./style";

const ContactFormComponent: FC = () => {
  const refForm = useRef<HTMLFormElement>(null);
  const [isFormDirty, setFormDirty] = useState(false);
  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    setFormDirty(true);
    setTimeout(
      () =>
        refForm.current
          ?.querySelector<HTMLInputElement>("input.error")
          ?.focus(),
      500
    );
  };
  return (
    <StyledForm ref={refForm} onSubmit={onSubmit}>
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

export default ContactFormComponent;
