import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import Input from './Input';

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
const StyledFormButton = styled.button`

`;


// style dla inputów (tylko dolny margines z labelem po kliknięciu podnosi się nad górę inputa) - i od lewa do prawa wczytywanie borderu
// mousemove na formie i zaleznie od połozenia myszki dodawać połozenie gradientu
// animacja po najechaniu na inputa, radient wczytuje się z dwuch stron (z 0 do 100% szerokości czy jakoś tak) i znika tak samo
function FormComponent() {
    const [rotation, setRotation] = useState(0);
    const formRef = useRef<HTMLFormElement>();
    
  return (
    <StyledForm rotation={`${rotation}rad`} ref={formRef}>
        <h1>Contact form</h1>
        <Input type="text" placeholder='Imię' />
        <Input type="text" placeholder='Nazwisko' />
        <Input type="text" placeholder='E-mail' />
        <Input type="text" placeholder='Numer Telefonu' />
        <StyledFormButton>Submit form</StyledFormButton>
    </StyledForm>
  );
}

export default FormComponent;
