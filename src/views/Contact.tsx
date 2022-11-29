import React from 'react';
import styled from 'styled-components'
import FormComponent from 'src/ui/FormComponent/FormComponent';

function Contact(props: any) {
  return (
    <>
      <h1>Contact page</h1>
      <p>Interesują mnie oferty związane z technologiami React/Next.js oraz Vue/Nuxt.js - szczególnie ambitne lub duże projekty. Jeśli jednak masz inną prośbę lub pytanie, nie wahaj się skorzystać z formularza.</p>
      <FormComponent />
    </>
  );
}

export default Contact;
