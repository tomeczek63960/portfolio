import { useRef, useContext } from 'react';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export const useScrollTrigger = (): [React.RefObject<HTMLHeadingElement>] => {
  const element = useRef<HTMLHeadingElement>(null);
  const {isActive} = useContext<{isActive: boolean, setActive: Function}>(ScrollTriggerContext)

  useIsomorphicLayoutEffect(() => {
    if(!isActive || !element.current) return;
    gsap.to(element.current, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: element.current,
        start: () => 'top ' + window.innerHeight * 0.55,
        end: () => 'top ' + window.innerHeight * 0.5,
      }
    });
  }, [isActive]);

  return [element];
}