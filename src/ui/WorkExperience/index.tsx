import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandleText from 'src/helpers/handleText'
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { simpleSplitText } from 'src/helpers/simpleSplitText';
import HeadingComponent from 'src/ui/Heading';
import Paragraph from 'src/ui/Paragraph';
import {WorkExperienceSection, StyledTimeline, StyledTimelineList, StyledTimelineListItem} from './style';

const WorkExperience = () => {
  const triggerRef = useRef<any>(null);
  const isSplitted = useRef(false);
  const timelineData = [
    {
      time: '2018',
      content: 'Rozpoczęcie nauki programowania'
    },
    {
      time: '2019',
      content: 'Bootcamp Vavatech z podstaw programowania html/css/js'
    },
    {
      time: '2020',
      content: 'Październik 2020 był miesiącem w którym podjąłem się pierwszej pracy jako frontend dev (która trwa aż do teraz)'
    },
    {
      time: 'Future',
      content: 'Chcesz być następny? odezwij się :) (tutaj link do kontaktu)'
    },
  ];

  useIsomorphicLayoutEffect(() => {
    let tl: any;
    if (!isSplitted.current) {
      isSplitted.current = true;
      const paragraphs = triggerRef.current.querySelectorAll('.timeline-paragraph');
      Array.from(paragraphs).forEach((paragraph) => {
        const text = new HandleText(paragraph, {
          type:"chars, words",
          tag: 'span'
        })
        gsap.set(text.chars, {
          scale: 4,
          autoAlpha: 0,
          rotationX: -180,
          transformOrigin: "100% 50%",
          ease: "back",
          stagger: 0.02,
        })
      })
    } 

    ScrollTrigger.batch(triggerRef.current.children, {
      start: "top 70%",
      onEnter: (batch: any) => {
        const progress = batch.reduce((acc: any, cur: any) => {
          const progressEl = cur.querySelector('.timeline-progress-active');
          const pointEl = cur.querySelector('.timeline-point');
          const dateEl = cur.querySelector('.date');
          const paragraph = cur.querySelector('.timeline-paragraph');
          
          return acc.concat([
            { type: 'point', el: pointEl },
            { type: 'date', el: dateEl },
            { type: 'paragraph', el: paragraph },
            { type: 'progress', el: progressEl }
          ]);
        }, []);
        if (!tl) {
          tl = gsap.timeline();
        }
        progress.forEach((obj: any) => {
          if (obj.el.classList.contains('finished')) return;
          obj.el.classList.add('finished');
          if (obj.type === 'point') {
            tl.to(obj.el, {
              duration: 0.3,
              background: 'white',
              stagger: 0.2,
              scale: 3
            });
          } else if (obj.type === 'date') {
            tl.to(obj.el, {
              duration: 0.2,
              x: 0,
              y: 0,
              opacity: 1,
              stagger: 0.2,
              ease: "power2.out"
            });
          } else if (obj.type === 'paragraph') {
            const spans = obj.el.querySelectorAll('span');
            tl.to(spans, {
              duration: 0.6,
              scale: 1,
              autoAlpha: 1,
              rotationX: 0,
              transformOrigin:"100% 50%",
              ease:"back",
              stagger: 0.02,
            })
          } else {
            tl.to(obj.el, {
              delay: 0.2,
              duration: 0.5,
              height: '100%',
              stagger: 0.2,
            });
          }
        })
      },
    });
  }, []);
  return (
    <WorkExperienceSection>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Doświadczenie zawodowe
      </HeadingComponent>
      <Paragraph>
        Coś o mnie i moim doświadczeniu zawodowym.
      </Paragraph>
      <StyledTimeline className="timeline">
        <StyledTimelineList ref={ triggerRef }>
          { timelineData.map((item) => {
            return (
              <StyledTimelineListItem key={ item.time }>
                <span className="date">{ item.time }</span>
                <div className="timeline-progress">
                  <span className="timeline-progress-active"></span>
                  <span className="timeline-point"></span>
                </div>
                <p className="timeline-paragraph">{ item.content }</p>
              </StyledTimelineListItem>
            )
          }) }
        </StyledTimelineList>
      </StyledTimeline>
    </WorkExperienceSection>
  );
}

export default WorkExperience;
