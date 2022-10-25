import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import colors from 'src/ui/globalStyled/variables';
import FormGroup from './FormGroup';
import Input from './Input';

const StyledForm = styled.form.attrs((props: {rotation: string, ref: HTMLFormElement}) => props)`
    margin: 100px auto;
    max-width: 500px;
    padding: 32px;
    border-radius: 20px;
    border: 2px solid transparent;
    box-shadow: 0 -3px 5px -1px #ebebeb;
    /* background-image: linear-gradient(var(--geist-background),var(--geist-background)),linear-gradient(calc(var(--contact-gradient-rotation)),var(--geist-violet-light) 0,var(--geist-highlight-purple) 20%,rgba(121,40,202,0) 80%); */
    background-origin: border-box;
    background-clip: padding-box,border-box;
    position: relative;

    filter: drop-shadow(0 8px 30px rgba(0,0,0,.12));
    box-shadow: inset 0 1px 1px -1px #3b3b3b;
    border: 1px solid transparent;
    background-image: linear-gradient(black, black),linear-gradient(calc(var(--contact-rotation)),#f81ce5 0,#7928ca 30%,rgba(121,40,202,0) 60%);
    h1 {
        margin-bottom: 20px;
    }
`;
const StyledFormButton = styled.button`
    margin-top: 30px;
    padding: 0 10px;
    width: calc(50% - 15px);
    height: 40px;
    line-height: 40px;
    border: 2px solid ${ colors.$gradientTo };
    color: ${ colors.$gradientTo };
    text-align: center;
    font-size: 14px;
    h1 {
        margin-bottom: 20px;
    }
`;


// style dla inputów (tylko dolny margines z labelem po kliknięciu podnosi się nad górę inputa) - i od lewa do prawa wczytywanie borderu
// mousemove na formie i zaleznie od połozenia myszki dodawać połozenie gradientu
// animacja po najechaniu na inputa, radient wczytuje się z dwuch stron (z 0 do 100% szerokości czy jakoś tak) i znika tak samo
function FormComponent() {
    const [rotation, setRotation] = useState(0);
    const formRef = useRef<HTMLFormElement>();
    
    const handleMouseMove = (e:any) => {
        const formClient = formRef.current?.getBoundingClientRect();

        if (!formClient) return;
        const formX = formClient.width / 2 + formClient.x;
        const formY = formClient.height / 2 + formClient.y;
        const x = e.clientX - formX;
        const y = e.clientY - formY;
        const rad = Math.atan(y / x) + Math.PI * (x < 0 ? 2 : 1);

        const r:any = document.querySelector(':root');
        r.style.setProperty('--contact-rotation', `${rad + 1.6}rad`);
    }
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

  return (
    <StyledForm rotation={`${rotation}rad`} ref={formRef}>
        <h1>Contact form</h1>
        <FormGroup>
            <Input type="text" placeholder='Tomasz' />
            <Input type="text" placeholder='Kardel' />
            <Input type="text" placeholder='jankowalski@wp.pl' />
            <Input type="text" placeholder='+48 797 231 899' />
        </FormGroup>
        <StyledFormButton>Submit form</StyledFormButton>
    </StyledForm>
  );
}

export default FormComponent;
