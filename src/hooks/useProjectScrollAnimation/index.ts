import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { isTruthy } from "src/helpers/checkFalsyType";

export const useProjectScrollAnimation = (): [
  RefObject<HTMLDivElement>,
  RefObject<HTMLSpanElement>
] => {
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const refProjectHoverLine = useRef<HTMLSpanElement>(null);
  const refProjectHover = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<GSAPTimeline>();
  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    refTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: refProjectHover.current,
        start: () => `top ${window.innerHeight * 0.9}`,
        end: () => `top ${window.innerHeight * 0.9}`,
      },
    });
    refTimeline.current.to(refProjectHover.current, {
      duration: 0.5,
      y: 0,
    });
    isTruthy(refProjectHover.current) &&
      refTimeline.current.to(refProjectHover.current.children, {
        duration: 0.5,
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.2,
      });
    refTimeline.current.to(refProjectHoverLine.current, {
      duration: 0.5,
      scaleX: 1,
    });
    return () => {
      refTimeline.current?.clear().kill();
    };
  }, [isActive]);

  return [refProjectHover, refProjectHoverLine];
};
