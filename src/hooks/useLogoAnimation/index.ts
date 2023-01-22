import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import type { IRootState } from "src/store";

export const useLogoAnimation = (): [
  RefObject<SVGSVGElement>,
  RefObject<SVGSVGElement>
] => {
  const refTimeline = useRef<GSAPTimeline>();
  const { isInitAnimation } = useSelector(
    (state: IRootState) => state.transition
  );
  const refTLetter = useRef<SVGSVGElement>(null);
  const refKLetter = useRef<SVGSVGElement>(null);
  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    const tPath = refTLetter.current?.querySelector("path");
    const kPath = refKLetter.current?.querySelector("path");
    refTimeline.current = gsap.timeline({ repeat: -1 });
    refTimeline.current.to([tPath, kPath], {
      duration: 3,
      strokeDashoffset: 0,
    });
    refTimeline.current.to([tPath, kPath], {
      duration: 3,
      fill: "#fff",
    });
    refTimeline.current.to([tPath, kPath], {
      delay: 6,
      duration: 3,
      fill: "transparent",
    });
    refTimeline.current.to([tPath, kPath], {
      duration: 3,
      strokeDashoffset: -200,
    });

    return () => {
      refTimeline.current?.clear().kill();
    };
  }, [isInitAnimation]);

  return [refTLetter, refKLetter];
};
