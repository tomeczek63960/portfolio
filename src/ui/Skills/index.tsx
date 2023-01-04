import React, { FC, Fragment } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import Carousel from "src/ui/Skills/Carousel";
import { StyledSkillsSection } from "./style";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsSkillsComponent, IStrapiSkillCarousel } from "./types";

const ComponentSkills: FC<PropsSkillsComponent> = ({ content }) => {
  return (
    <StyledSkillsSection>
      <Heading heading={content.Heading} />
      {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}

      {content.SkillsCarousel.map((skillCarousel: IStrapiSkillCarousel) => (
        <Fragment key={skillCarousel.id}>
          <Heading heading={skillCarousel.Heading} />
          <Carousel carousel={skillCarousel} />
        </Fragment>
      ))}
    </StyledSkillsSection>
  );
};

export default ComponentSkills;
