import React, { useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import {
  StyledTimelineList,
} from './style';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import WorkExperienceListItem from 'src/ui/WorkExperience/WorkExperienceListItem';
import {WrokExperienceItem} from 'src/ui/WorkExperience/WorkExperienceListItem/types';

const WorkExperienceList: React.FC = () => {
  const timelineList = useRef<any>();
  const tl = useRef<any>();
  const workExperienceItems = [
    {
      date: "2018 czerwiec",
      content: "Rozpoczęcie nauki programowania"
    },
    {
      date: "2019 - luty 2020",
      content: "Bootcamp Vavatech z podstaw programowania html/css/js"
    },
    {
      date: "2020 październik",
      content: "Październik 2020 był miesiącem w którym podjąłem się pierwszej pracy jako frontend dev (która trwa aż do teraz)"
    },
    {
      date: "Now",
      content: "Chcesz być następny? nie wahaj się 🤭 sprawdź moje Cv w sekcji poniżej, jeżeli wszystko się zgadzaj odezwij się poprzez Linkedin (tutaj link) lub formularz na stronie kontaktowej (tutaj link)."
    }
  ]
  useEffect(() => {
    let id = 0;
    if (!tl.current) {
      tl.current = gsap.timeline();
    }
    ScrollTrigger.batch(timelineList.current.children, {
      start: "top 50%",
      onEnter: (batch: any) => {
        const progress = batch.reduce((acc: any, cur: any) => {
          id += 1;
          const dot = cur.querySelector('.dot');
          const line = cur.querySelector('.line');
          const lineSvg = cur.querySelector('.line svg');
          const itemContent = cur.querySelector('.list-item-content');
          const obj = {
            line: line,
            content: itemContent,
            dot: dot,
            lineSvg: lineSvg,
            id: id
          }
          return acc.concat([obj]);
        }, []);
        progress.forEach((obj: any) => {
          if (!obj.dot || obj.dot.classList.contains('finished')) return;
          obj.dot.classList.add('finished');
          tl.current.to(obj.content, {
            delay: 0.1,
            duration: 0.5,
            opacity: 1,
            y: 0,
          });
          tl.current.to(obj.dot, {
            duration: 0.5,
            opacity: 1,
          }, `start-${obj.id}`);
          obj.lineSvg && tl.current.to(obj.lineSvg, {
            duration: 0.5,
            opacity: 1,
            y: '-60%',
          }, `start-${obj.id}aa`);
        })
      },
    });
  }, []);
  return (
    <StyledTimelineList ref={timelineList}>
      {workExperienceItems.map((item: WrokExperienceItem, index: number) => {
        let order = '';
        if (index === 0) {
          order = 'first'
        } else if (index === workExperienceItems.length - 1) {
          order = 'last'
        }
        return <WorkExperienceListItem order={order} item={item} key={item.content} />
      }
      )}
    </StyledTimelineList>
  );
}

export default WorkExperienceList;
