import {useRef, useContext} from "react";
import {gsap} from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {ScrollTriggerContext} from "src/context/ScrollTriggerContext";

export const useTransformAnimation = (): [React.RefObject<HTMLHeadingElement>] => {
  const paragraph = useRef<HTMLHeadingElement>(null);
  const {isActive} = useContext<{isActive: boolean, setActive: Function}>(ScrollTriggerContext)

  useIsomorphicLayoutEffect(() => {
    if(!isActive || !paragraph.current) return;
    gsap.to(paragraph.current, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: paragraph.current,
        start: () => 'top ' + window.innerHeight * 0.75,
        end: () => 'top ' + window.innerHeight * 0.7,
      }
    });
  }, [isActive]);

  return [paragraph];
}