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

const ComponentWorkExperience: FC = () => {
  const [refWorkExperienceHeadContent] = useScrollTrigger(0.6, "children") as [
    RefObject<HTMLDivElement>
  ];
  const [refWorkExperienceCta] = useScrollTrigger(0.7) as [
    RefObject<HTMLButtonElement>
  ];

  return (
    <StyledWorkExperienceSection>
      <Heading tagName="h2" color="#6A82FB">
        Doświadczenie zawodowe
      </Heading>
      <Paragraph>Coś o mnie i moim doświadczeniu zawodowym.</Paragraph>

      <StyledWorkExperience>
        <StyledWorkExperienceHead>
          <StyledWorkExperienceHeadBackground>
            <SectionWave />
          </StyledWorkExperienceHeadBackground>
          <StyledWorkExperienceHeadContent ref={refWorkExperienceHeadContent}>
            <h3>My programing timeline</h3>
            <label>
              Moje ostatnie 4 lata które były przesiąknięte programowaniem
            </label>
          </StyledWorkExperienceHeadContent>
        </StyledWorkExperienceHead>

        <StyledWorkExperienceContent>
          <WorkExperienceList />
          <StyledButtonSecondary ref={refWorkExperienceCta}>
            Go to Cv
          </StyledButtonSecondary>
        </StyledWorkExperienceContent>
      </StyledWorkExperience>
    </StyledWorkExperienceSection>
  );
};

export default ComponentWorkExperience;
