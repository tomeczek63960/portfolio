import React, { FC, RefObject } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import {
  StyledWorkExperienceSection,
  StyledWorkExperience,
  StyledWorkExperienceHead,
  StyledWorkExperienceHeadBackground,
  StyledWorkExperienceHeadContent,
  StyledWorkExperienceContent,
  StyledButtonSecondary,
} from "./style";
import { SectionWave } from "src/Svg";
import WorkExperienceList from "./WorkExperienceList";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsWorkExperience } from "./types";

const ComponentWorkExperience: FC<PropsWorkExperience> = ({ content }) => {
  const [refWorkExperienceHeadContent] = useScrollTrigger(0.6, "children") as [
    RefObject<HTMLDivElement>
  ];
  const [refWorkExperienceCta] = useScrollTrigger(0.7) as [
    RefObject<HTMLButtonElement>
  ];

  return (
    <StyledWorkExperienceSection>
      <Heading heading={content.Heading} />
      {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}

      <StyledWorkExperience>
        <StyledWorkExperienceHead>
          <StyledWorkExperienceHeadBackground>
            <SectionWave />
          </StyledWorkExperienceHeadBackground>
          <StyledWorkExperienceHeadContent ref={refWorkExperienceHeadContent}>
            <h3>{content.HeadTitle}</h3>
            <label>{content.HeadText}</label>
          </StyledWorkExperienceHeadContent>
        </StyledWorkExperienceHead>

        <StyledWorkExperienceContent>
          <WorkExperienceList items={content.WorkExperienceItem} />
          <StyledButtonSecondary
            ref={refWorkExperienceCta}
            data-scroll-to={content.BtnLinkTo}
          >
            {content.BtnText}
          </StyledButtonSecondary>
        </StyledWorkExperienceContent>
      </StyledWorkExperience>
    </StyledWorkExperienceSection>
  );
};

export default ComponentWorkExperience;
