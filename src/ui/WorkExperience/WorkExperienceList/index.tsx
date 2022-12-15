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

    ScrollTrigger.batch(timelineList.current.children, {
      start: "top 70%",
      onEnter: (batch: any) => {
        const progress = batch.reduce((acc: any, cur: any) => {
          const dot = cur.querySelector('.dot');
          const line = cur.querySelector('.line');
          const lineSvg = cur.querySelector('.line svg');
          const itemContent = cur.querySelector('.list-item-content');

          // zmienić na jeden obiekt w którym zawsze są te 4 wartości i zawsze obsługiwać te 4 wartości w odpowiedniej kolejności (linjia z kontentem w jednym tempie)
          return acc.concat([
            { type: 'line', el: line },
            { type: 'content', el: itemContent },
            { type: 'dot', el: dot },
            { type: 'lineSvg', el: lineSvg }
          ]);
        }, []);
        if (!tl.current) {
          tl.current = gsap.timeline();
        }
        progress.forEach((obj: any) => {
          if (!obj.el || obj.el.classList.contains('finished')) return;
          obj.el.classList.add('finished');
          if (obj.type === 'dot') {
            tl.current.to(obj.el, {
              delay: 0.2,
              duration: 0.5,
              opacity: 1,
              stagger: 0.2,
            });
          } else if (obj.type === 'line') {
            tl.current.to(obj.el, {
              delay: 0.2,
              duration: 0.5,
              height: '100%',
              stagger: 0.2,
            });
          } else if (obj.type === 'content') {
            tl.current.to(obj.el, {
              delay: 0.2,
              duration: 0.5,
              opacity: 1,
              y: 0,
              stagger: 0.2,
            });
          } else if (obj.type === 'lineSvg') {
            tl.current.to(obj.el, {
              delay: 0.2,
              duration: 0.5,
              opacity: 1,
              stagger: 0.2,
            });
          }
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
