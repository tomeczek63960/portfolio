import { useRef } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";

export const useTimeline = (callback: Function): [GSAPTimeline] => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));

  useIsomorphicLayoutEffect(() => {
    callback(timeline.current);
    return () => {
      timeline.current?.kill();
      timeline.current?.clear();
    };
  }, []);

  return [timeline.current];
};
