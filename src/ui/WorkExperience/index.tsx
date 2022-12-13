import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import HandleText from 'src/helpers/handleText'
// import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {
  StyledWorkExperienceSection,
  StyledTimelineHeadBackground,
  StyledTimelineHead,
  StyledTimelineContent,
  StyledTimeline,
  StyledTimelineList,
  StyledCard,
  StyledCardContent,
  StyledCardLine,
  StyledButtonSecondary,
} from './style';
import ArrowDown from '../../../public/svg/arrow-down.svg';
import SectionWave from '../../../public/svg/section-wave.svg';

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
          <StyledTimelineList>
            <StyledCard>
              <StyledCardLine order="first">
                <div className="dot"></div>
              </StyledCardLine>
              <StyledCardContent>
                <h4>2018 czerwiec</h4>
                <p>Rozpoczęcie nauki programowania</p>
              </StyledCardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardLine>
                <div className="dot"></div>
              </StyledCardLine>
              <StyledCardContent>
                <h4>2019 - luty 2020</h4>
                <p>Bootcamp Vavatech z podstaw programowania html/css/js</p>
              </StyledCardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardLine>
                <div className="dot"></div>
              </StyledCardLine>
              <StyledCardContent>
                <h4>2020 październik</h4>
                <p>Październik 2020 był miesiącem w którym podjąłem się pierwszej pracy jako frontend dev (która trwa aż do teraz)</p>
              </StyledCardContent>
            </StyledCard>
            <StyledCard>
              <StyledCardLine order="last">
                <div className="dot"></div>
                <ArrowDown />
              </StyledCardLine>
              <StyledCardContent>
                <h4>Now</h4>
                <p>Chcesz być następny? nie wahaj się 🤭 sprawdź moje Cv w sekcji poniżej, jeżeli wszystko się zgadzaj odezwij się poprzez Linkedin (tutaj link) lub formularz na stronie kontaktowej (tutaj link).</p>
              </StyledCardContent>
            </StyledCard>
          </StyledTimelineList>
          <StyledButtonSecondary>Go to Cv</StyledButtonSecondary>
        </StyledTimelineContent>
      </StyledTimeline>
    </StyledWorkExperienceSection>
  );
}

export default WorkExperience;
