import React from 'react';
import styled from 'styled-components'
import FormComponent from 'src/ui/FormComponent/FormComponent';
import Performence from "../../public/svg/performence.svg"

function Contact(props: any) {
  return (
    <>
      <h1>Contact page</h1>
      {/* animacja wysokości słópków i na ostatnim niech siedzi ten człowiek zeby uzyskać fajny efekt */}
      <Performence />
      <p>Jeżeli twoje wyniki zależą od tego jakich ludzi masz na pokładzie, to czemu nie wybrać tych właściwych 🐢</p>
      <p>Interesują mnie oferty związane z technologiami React/Next.js oraz Vue/Nuxt.js - szczególnie ambitne lub duże projekty. Jeśli jednak masz inną prośbę lub pytanie, nie wahaj się skorzystać z formularza.</p>
      <FormComponent />
    </>
  );
}

export default Contact;
