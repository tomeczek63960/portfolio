import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import {Html, HtmlBefore, HtmlAfter, BodyBefore, BodyContent} from './style';
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export default function LoadingAnimation({ children }: {children: any}) {
  const {pathname, locale} = useRouter();
  const {setIsInitAnimation} = useContext<any>(TransitionContext)
  const {setActive} = useContext<any>(ScrollTriggerContext)
  const [displayChildren, setDisplayChildren] = useState();
  // const [timeline, setTimeline] = useState<any>();
  const timeline = useRef<any>(false);
  const timelineEnter = useRef<any>(false);
  const el = useRef<any>();
  const flag = useRef<any>(false);
  const htmlBefore = useRef<any>(false);
  const htmlAfter = useRef<any>(false);
  const bodyBefore = useRef<any>(false);
  
  useEffect(() => {
    // setTimeline();
    if (timeline.current) return;
    timeline.current = gsap.timeline({ paused: true });
    timelineEnter.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }), 'start'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40
      }), 'start2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        scale: 3,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.7,
        opacity: 1
      })
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 100,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.35,
        opacity: 0
      }), '-=0.7'
    );
      
    timelineEnter.current.add(
      gsap.to(bodyBefore.current, {
        delay: 1,
        duration: 0.4,
        height: '100%'
      })
    );
    timelineEnter.current.add(
      gsap.to(bodyBefore.current, {
        delay: 1,
        duration: 0.4,
        height: '100%'
      })
    );
    timelineEnter.current.add(
      gsap.to(el.current, {
        delay: 1.4,
        duration: 0.4,
        opacity: 1,
        pointerEvents: 'all'
      })
    );
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!timeline.current) return;
    console.log('here?')
    // return setDisplayChildren(children)
    // if (timeline.current.duration() === 0 || flag.current) {
    //   if (!flag.current) {
    //     setDisplayChildren(children);
    //   } else if (!timeline.current.isActive()) {
    //     setDisplayChildren(children);
    //   }
    // } else {
      if (timeline.current.isActive()) {
        console.log('timeline is active');
      } else {
        timeline.current.play().then(() => {
          timeline.current.pause();
          setIsInitAnimation(false);
          // timeline.current.seek(0).pause().clear()
          setDisplayChildren(children);
          // tutaj zamiast tego wykonania animacji powinna iść jakaś globalna ze stora na którą tylko damy .play()

          timelineEnter.current.play().then(() => {
            setActive(true);
          });
        });
      }
    // }
    flag.current = true;
  }, [timeline.current, locale, pathname])

  return <>
    <Html>
      <HtmlBefore ref={ htmlBefore } className="html--before"></HtmlBefore>
      <HtmlAfter ref={ htmlAfter } className="html--after">TK</HtmlAfter>
      <BodyBefore ref={ bodyBefore } className="body--before"></BodyBefore>
    </Html>

    <BodyContent ref={el}>
      { displayChildren }
    </BodyContent>
  </>
}