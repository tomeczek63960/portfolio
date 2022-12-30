import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import type { IRootState } from "src/store";
import { isTruthy } from "src/helpers/checkFalsyType";

export const useScrollTrigger = (
  scrollTriggerStart?: number,
  type?: string,
  duration?: number
): [RefObject<HTMLElement>] => {
  const refElement = useRef<HTMLElement>(null);
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (!isActive || refElement.current == null) return;
    const elements =
      type === "children" ? refElement.current.children : refElement.current;
    gsap.to(elements, {
      duration: isTruthy(duration) ? duration : 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      pointerEvents: "all",
      scrollTrigger: {
        trigger: refElement.current,
        start: () =>
          `top ${
            window.innerHeight *
            (isTruthy(scrollTriggerStart) ? scrollTriggerStart + 0.05 : 0.55)
          }`,
        end: () =>
          `top ${
            window.innerHeight *
            (isTruthy(scrollTriggerStart) ? scrollTriggerStart : 0.5)
          }`,
      },
    });
  }, [isActive]);

  return [refElement];
};
