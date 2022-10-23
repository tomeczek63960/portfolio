import React, { useEffect } from 'react';
import styled from 'styled-components'
import FormComponent from 'components/FormComponent/FormComponent';

const Btn = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    color: white;
    background: palevioletred;
  }
`

function Contact() {
  return (
    <div>
        <h1>Contact page</h1>
          <FormComponent />
          <Btn>HERE cLIck</Btn>
    </div>
  );
}

export default Contact;
