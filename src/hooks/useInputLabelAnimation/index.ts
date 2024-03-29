import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { colors } from "src/styled/mixins";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useInputLabelAnimation = (): [
  GSAPTimeline,
  RefObject<HTMLLabelElement>
] => {
  const refTimeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));
  const refLabel = useRef<HTMLLabelElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isFalsy(refLabel.current)) return;
    const labelHeight = refLabel.current.offsetHeight / 1.4;
    refTimeline.current.to(refLabel.current, {
      duration: 0.2,
      ease: "M0,0 C0.4,0 0.2,1 1,1",
      color: colors.white,
      scale: 0.75,
      top: -labelHeight,
    });
    return () => {
      refTimeline.current?.clear().kill();
    };
  }, []);

  return [refTimeline.current, refLabel];
};
