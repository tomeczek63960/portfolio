import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import ButtonComponent from 'src/ui/Button';
import { nameValidation, emailValidation, surnameValidation, phoneValidation } from 'src/helpers/validations';

const StyledForm = styled.form.attrs((props: {rotation: string, ref: HTMLFormElement}) => props)`
    margin-top: 100px;
    position: relative;
    border: 1px solid transparent;
    background-image: linear-gradient(black, black),linear-gradient(calc(var(--contact-rotation)),#f81ce5 0,#7928ca 30%,rgba(121,40,202,0) 60%);
    @media screen and (min-width: 768px) {
      padding-right: 80px;
    }
    h1 {
        margin-bottom: 20px;
    }
`;

function FormComponent() {
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
