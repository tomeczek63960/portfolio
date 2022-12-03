import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components'
import HandleText from 'src/helpers/handleText'
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { responsive, colors } from 'src/styled/mixins';
import { simpleSplitText } from 'src/helpers/simpleSplitText';
import HeadingComponent from 'src/ui/Heading/Heading';

const StyledTimeline = styled.section`
  margin-top: 35px;
  max-width: 310px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 140px;
  }
  li p {
    padding: 0 20px;
  }
  .timeline-paragraph {
    opacity: 1;
  }
  .data, p {
    font-size: 14px;
    line-height: 20px;
    transition: opacity 0.2s;
    color: ${colors.grayLightSecondary};
    ${responsive.tabletP`
      font-size: 16px;
      line-height: 23px;
    `}
  }
  .date {
    padding-right: 10px;
    font-size: 12px;
    width: 50px;
    flex-shrink: 0;
    text-align: right;
    opacity: 0;
    transform: translateX(-30%);
    font-weight: 700;
    color: ${colors.green};
    ${responsive.tabletP`
      font-size: 14px;
      line-height: 23px;
    `}
  }
  .timeline-line {
    background: ${colors.grayLightSecondary};
    width: 4px;
    border-radius: 12px;
    position: relative;
    justify-self: end;
  }
  .timeline-progress,
  .timeline-progress-active {
    width: 4px;
    position: absolute;
  }
  .timeline-progress {
    background: ${colors.grayLightSecondary};
    height: 100%;
    top: 10px;
    left: 50px;
  }
  .timeline-progress-active {
    height: 0%;
    background: ${colors.purpleSecondary};
    background-size: 0% 0%;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .timeline-point {
    border: none;
    position: absolute;

    border-radius: 50%;
    background: ${colors.grayLightSecondary};
    width: 4px;
    height: 4px;
    transform: translate(-50%, -50%);
    z-index:10;
    top: 0;
    left: 50%;
  }
  .timeline-innerline {
    position: absolute;
    width: 4px;
    height: 0%;
    top: 0%;
    left: 0%;
  }
`;
const StyledTimelineList = styled.ul``;
const StyledTimelineListItem = styled.li``;

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
  ]

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
    <>
      <HeadingComponent tagName='h2' color="#6A82FB">
        Doświadczenie zawodowe
      </HeadingComponent>
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
    </>
  );
}

export default WorkExperience;
