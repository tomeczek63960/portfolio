import React, { useRef, useContext } from 'react';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export const useScrollTrigger = (scrollTriggerStart?: number, type?: string): [React.RefObject<HTMLElement>] => {
  const element = useRef<HTMLElement>(null);
  const {isActive} = useContext<{isActive: boolean, setActive: Function}>(ScrollTriggerContext)

  useIsomorphicLayoutEffect(() => {
    if(!isActive || !element.current) return;
    const elements = type === 'children' ? element.current.children : element.current;
    gsap.to(elements, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: element.current,
        start: () => 'top ' + window.innerHeight * (scrollTriggerStart ? scrollTriggerStart + 0.05 : 0.55),
        end: () => 'top ' + window.innerHeight * (scrollTriggerStart || 0.5),
      }
    });
  }, [isActive]);

  return [element];
}