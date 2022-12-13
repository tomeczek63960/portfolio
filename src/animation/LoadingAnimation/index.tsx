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
  const [timeline, setTimeline] = useState<any>();
  const el = useRef<any>();
  const flag = useRef<any>(false);
  const htmlBefore = useRef<any>(false);
  const htmlAfter = useRef<any>(false);
  const bodyBefore = useRef<any>(false);
  
  useEffect(() => {
    setTimeline(gsap.timeline({ paused: true }));
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!timeline) return;
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }), 'start'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }), '-=0.35'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start2'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40
      }), 'start2'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57
      }), '-=0.35'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back2'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back2'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        scale: 3,
      })
    );
    timeline.add(
      gsap.to(htmlAfter.current, {
        duration: 0.7,
        opacity: 1
      })
    );
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 100,
      })
    );
    timeline.add(
      gsap.to(htmlAfter.current, {
        duration: 0.35,
        opacity: 0
      }), '-=0.7'
    );
    // return setDisplayChildren(children)
    if (timeline.duration() === 0 || flag.current) {
      if (!flag.current) {
        setDisplayChildren(children);
      } else if (!timeline.isActive()) {
        setDisplayChildren(children);
      }
    } else {
      if (timeline.isActive()) {
        console.log('timeline is active');
      } else {
        timeline.play().then(() => {
          timeline.pause();
          setIsInitAnimation(false);
          // timeline.seek(0).pause().clear()
          setDisplayChildren(children);
          // tutaj zamiast tego wykonania animacji powinna iść jakaś globalna ze stora na którą tylko damy .play()
          gsap.to(bodyBefore.current, {
            delay: 1,
            duration: 0.4,
            height: '100%'
          });
          gsap.to(el.current, {
            delay: 1.4,
            duration: 0.4,
            opacity: 1,
            pointerEvents: 'all'
          });
          setTimeout(() => {
            setActive(true);
          }, 2500);
        });
      }
    }
    flag.current = true;
  }, [timeline, locale, pathname])

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