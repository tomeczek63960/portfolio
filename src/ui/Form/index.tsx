import React, { FC } from "react";
import ContactFormComponent from "src/ui/Form/FormComponent";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { StyledContactFormSection } from "./style";
import { PropsForm } from "./types";

const ComponentForm: FC<PropsForm> = ({ content }) => {
  return (
    <StyledContactFormSection>
      <Heading heading={content.Heading} />
      {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}
      <ContactFormComponent />
    </StyledContactFormSection>
  );
};

export default ComponentForm;
