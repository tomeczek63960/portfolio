import React from "react";
import FormComponent from "src/ui/FormComponent";
import HeadingComponent from "src/ui/Heading";
import styled from "styled-components";
import { variables } from "src/styled/mixins";
import Paragraph from "src/ui/Paragraph";
import PerformenceComponent from "src/ui/Introduction/Svg/Performence";

const StyledIntroductionSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const StyledContactFormSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
const Contact: React.FC = () => {
  return (
    <>
      <StyledIntroductionSection>
        <HeadingComponent tagName="h2" color="#6A82FB">
          Contact Me
        </HeadingComponent>
        <PerformenceComponent />
        <Paragraph>Zostaw po sobie jakąś wiadomość 📭</Paragraph>
        <Paragraph>
          Jeżeli twoje wyniki zależą od tego jakich ludzi masz na pokładzie, to
          czemu nie wybrać tych właściwych 🐢
        </Paragraph>
        <Paragraph>
          Interesują mnie oferty związane z technologiami React/Next.js oraz
          Vue/Nuxt.js - szczególnie ambitne lub duże projekty. Jeśli jednak masz
          inną prośbę lub pytanie, nie wahaj się skorzystać z formularza.
        </Paragraph>
      </StyledIntroductionSection>

      <StyledContactFormSection>
        <HeadingComponent tagName="h3" color="#7928ca" selectionColor="#6A82FB">
          Użyj formularza żeby się ze mną skontaktować
        </HeadingComponent>
        <Paragraph>
          Milczenie jest złotem 🤫 jednak nie w tym przypadku, daj znać co Ci
          chodzi po głowie 💡
        </Paragraph>
        <FormComponent />
      </StyledContactFormSection>
    </>
  );
};

export default Contact;
