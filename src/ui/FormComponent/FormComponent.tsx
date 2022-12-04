import React, { useEffect, useRef, useState } from 'react';
import Input from 'src/ui/Input/Input';
import ButtonComponent from 'src/ui/Button/Button';
import { nameValidation, emailValidation, surnameValidation, phoneValidation } from 'src/helpers/validations';
import {StyledForm} from './style';

const FormComponent = () => {
  const formRef = useRef<HTMLFormElement>();
  const [isFormDirty, setFormDirty] = useState(false);
  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormDirty(true);
    setTimeout(() => {
      const errorInput = formRef.current?.querySelector<HTMLInputElement>('input.error');
      if (errorInput) {
        errorInput.focus();
      }
    }, 500);
  }
  return (
    <StyledForm ref={formRef} onSubmit={onSubmit} >
        <Input isFormDirty={isFormDirty} type="text" placeholder='Imię' validation={nameValidation} />
        <Input isFormDirty={isFormDirty} type="text" placeholder='Nazwisko' validation={surnameValidation} />
        <Input isFormDirty={isFormDirty} type="text" placeholder='E-mail' validation={emailValidation} />
        <Input isFormDirty={isFormDirty} type="text" placeholder='Numer Telefonu' validation={phoneValidation} />
        <ButtonComponent>Submit form</ButtonComponent>
    </StyledForm>
  );
}

export default FormComponent;
