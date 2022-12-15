import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandleText from 'src/helpers/handleText'
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {
  StyledWorkExperienceSection,
  StyledTimelineHeadBackground,
  StyledTimelineHead,
  StyledTimelineContent,
  StyledTimeline,
  StyledButtonSecondary,
} from './style';
import SectionWave from '../../../public/svg/section-wave.svg';
import WorkExperienceList from './WorkExperienceList';

const WorkExperience: React.FC = () => {
  return (
    <StyledWorkExperienceSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Doświadczenie zawodowe
      </HeadingComponent>
      <Paragraph>
        Coś o mnie i moim doświadczeniu zawodowym.
      </Paragraph>

      <StyledTimelineHeadBackground>
        <SectionWave />
      </StyledTimelineHeadBackground>

      <StyledTimeline>
        <StyledTimelineHead>
          <h3>My programing timeline</h3>
          <label>Moje ostatnie 4 lata które były przesiąknięte programowaniem</label>
        </StyledTimelineHead>
        
        <StyledTimelineContent>
          <WorkExperienceList />
          <StyledButtonSecondary>Go to Cv</StyledButtonSecondary>
        </StyledTimelineContent>
      </StyledTimeline>
    </StyledWorkExperienceSection>
  );
}

export default WorkExperience;
