import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { colors } from "src/styled/mixins";

export const useInputLabelAnimation = (): [
  GSAPTimeline,
  RefObject<HTMLLabelElement>
] => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));
  const labelRef = useRef<HTMLLabelElement>(null);

  useIsomorphicLayoutEffect(() => {
    timeline.current.to(labelRef.current, {
      duration: 0.2,
      ease: "M0,0 C0.4,0 0.2,1 1,1",
      color: colors.white,
      scale: 0.75,
      yPercent: -120,
    });
    return () => {
      timeline.current?.clear().kill();
    };
  }, []);

  return [timeline.current, labelRef];
};
