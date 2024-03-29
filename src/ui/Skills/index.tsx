import React, { FC } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import Carousel from "src/ui/Skills/Carousel";
import { StyledSkillsSection, StyledSillCarouselWrapper } from "./style";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsSkillsComponent, IStrapiSkillCarousel } from "./types";
import { isTruthy } from "src/helpers/checkFalsyType";

const ComponentSkills: FC<PropsSkillsComponent> = ({ content }) => (
  <StyledSkillsSection id="Skills">
    <Heading heading={content.Heading} />
    {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
      <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
    ))}

    {content.SkillsCarousel.map(
      (skillCarousel: IStrapiSkillCarousel) =>
        isTruthy(skillCarousel.Skill.length) && (
          <StyledSillCarouselWrapper key={skillCarousel.id}>
            <Heading heading={skillCarousel.Heading} />
            <Carousel carousel={skillCarousel} />
          </StyledSillCarouselWrapper>
        )
    )}
  </StyledSkillsSection>
);

export default ComponentSkills;
