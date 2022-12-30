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
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const refTLetter = useRef<SVGSVGElement>(null);
  const refKLetter = useRef<SVGSVGElement>(null);
  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    refTimeline.current = gsap.timeline({ repeat: -1 });
    const tPath = refTLetter.current?.querySelector("path");
    const kPath = refKLetter.current?.querySelector("path");
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
  }, [isActive]);

  return [refTLetter, refKLetter];
};
