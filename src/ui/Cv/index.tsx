import React, { FC } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import { StyledCvSection } from "./style";
import CvBox from "./CvBox";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsCvBox } from "./types";

const ComponentCv: FC<PropsCvBox> = ({ content }) => {
  return (
    <StyledCvSection id="Cv">
      <Heading heading={content.Heading} />
      {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}

      <CvBox content={content} />
    </StyledCvSection>
  );
};

export default ComponentCv;
