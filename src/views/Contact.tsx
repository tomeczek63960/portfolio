import React from 'react';
import FormComponent from 'src/ui/FormComponent/FormComponent';
import Performence from "../../public/svg/performence.svg"
import HeadingComponent from 'src/ui/Heading/Heading';

const Contact = (props: any) => {
  return (
    <>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Contact Page    
      </HeadingComponent>
      {/* animacja wysokości słópków i na ostatnim niech siedzi ten człowiek zeby uzyskać fajny efekt */}
      <Performence />
      <p>Zostaw po sobie jakąś wiadomość 📭</p>
      <p>Jeżeli twoje wyniki zależą od tego jakich ludzi masz na pokładzie, to czemu nie wybrać tych właściwych 🐢</p>
      <p>Interesują mnie oferty związane z technologiami React/Next.js oraz Vue/Nuxt.js - szczególnie ambitne lub duże projekty. Jeśli jednak masz inną prośbę lub pytanie, nie wahaj się skorzystać z formularza.</p>
      <HeadingComponent tagName='h3' color="#7928ca">
        Użyj formularza żeby się ze mną skontaktować
      </HeadingComponent>
      <FormComponent />
    </>
  );
}

export default Contact;
