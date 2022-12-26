import React from "react";
import HeadingComponent from "src/ui/Heading";
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
import SectionWave from "../../../public/svg/section-wave.svg";
import WorkExperienceList from "./WorkExperienceList";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";

const WorkExperience: React.FC = () => {
  const [workExperienceHeadContent] = useScrollTrigger(0.6, "children") as [
    React.RefObject<HTMLDivElement>
  ];
  const [workExperienceCta] = useScrollTrigger(0.7) as [
    React.RefObject<HTMLButtonElement>
  ];

  return (
    <StyledWorkExperienceSection>
      <HeadingComponent tagName="h2" color="#6A82FB">
        Doświadczenie zawodowe
      </HeadingComponent>
      <Paragraph>Coś o mnie i moim doświadczeniu zawodowym.</Paragraph>

      <StyledWorkExperience>
        <StyledWorkExperienceHead>
          <StyledWorkExperienceHeadBackground>
            <SectionWave />
          </StyledWorkExperienceHeadBackground>
          <StyledWorkExperienceHeadContent ref={workExperienceHeadContent}>
            <h3>My programing timeline</h3>
            <label>
              Moje ostatnie 4 lata które były przesiąknięte programowaniem
            </label>
          </StyledWorkExperienceHeadContent>
        </StyledWorkExperienceHead>

        <StyledWorkExperienceContent>
          <WorkExperienceList />
          <StyledButtonSecondary ref={workExperienceCta}>
            Go to Cv
          </StyledButtonSecondary>
        </StyledWorkExperienceContent>
      </StyledWorkExperience>
    </StyledWorkExperienceSection>
  );
};

export default WorkExperience;
