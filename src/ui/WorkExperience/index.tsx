import React, { useRef } from 'react';
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {
  StyledWorkExperienceSection,
  StyledWorkExperienceHeadBackground,
  StyledWorkExperienceHead,
  StyledWorkExperienceContent,
  StyledWorkExperience,
  StyledButtonSecondary,
} from './style';
import SectionWave from '../../../public/svg/section-wave.svg';
import WorkExperienceList from './WorkExperienceList';
import { useScrollTrigger } from 'src/hooks/useScrollTrigger';

const WorkExperience: React.FC = () => {
  const [workExperienceHead] = useScrollTrigger() as [React.RefObject<HTMLDivElement>];
  const [workExperienceCta] = useScrollTrigger(0.7) as [React.RefObject<HTMLButtonElement>];

  return (
    <StyledWorkExperienceSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Doświadczenie zawodowe
      </HeadingComponent>
      <Paragraph>
        Coś o mnie i moim doświadczeniu zawodowym.
      </Paragraph>

      <StyledWorkExperienceHeadBackground>
        <SectionWave />
      </StyledWorkExperienceHeadBackground>

      <StyledWorkExperience>
        <StyledWorkExperienceHead ref={workExperienceHead}>
          <h3>My programing timeline</h3>
          <label>Moje ostatnie 4 lata które były przesiąknięte programowaniem</label>
        </StyledWorkExperienceHead>
        
        <StyledWorkExperienceContent>
          <WorkExperienceList />
          <StyledButtonSecondary ref={workExperienceCta}>Go to Cv</StyledButtonSecondary>
        </StyledWorkExperienceContent>
      </StyledWorkExperience>
    </StyledWorkExperienceSection>
  );
}

export default WorkExperience;
