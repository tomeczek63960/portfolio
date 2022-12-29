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
  const projectHoverLine = useRef<HTMLSpanElement>(null);
  const projectHover = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();
  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: projectHover.current,
        start: () => `top ${window.innerHeight * 0.85}`,
        end: () => `top ${window.innerHeight * 0.8}`,
      },
    });
    timeline.current.to(projectHover.current, {
      duration: 0.5,
      y: 0,
    });
    isTruthy(projectHover.current) &&
      timeline.current.to(projectHover.current.children, {
        duration: 0.5,
        y: 0,
        x: 0,
        opacity: 1,
        stagger: 0.2,
      });
    timeline.current.to(projectHoverLine.current, {
      duration: 0.5,
      scaleX: 1,
    });
    return () => {
      timeline.current?.clear().kill();
    };
  }, [isActive]);

  return [projectHover, projectHoverLine];
};
