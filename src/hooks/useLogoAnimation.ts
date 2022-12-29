import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import type { IRootState } from "src/store";

export const useLogoAnimation = (): [
  RefObject<SVGSVGElement>,
  RefObject<SVGSVGElement>
] => {
  const tl = useRef<GSAPTimeline>();
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const tLetter = useRef<SVGSVGElement>(null);
  const kLetter = useRef<SVGSVGElement>(null);
  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    tl.current = gsap.timeline({ repeat: -1 });
    const tPath = tLetter.current?.querySelector("path");
    const kPath = kLetter.current?.querySelector("path");
    tl.current.to([tPath, kPath], {
      duration: 3,
      strokeDashoffset: 0,
    });
    tl.current.to([tPath, kPath], {
      duration: 3,
      fill: "#fff",
    });
    tl.current.to([tPath, kPath], {
      delay: 6,
      duration: 3,
      fill: "transparent",
    });
    tl.current.to([tPath, kPath], {
      duration: 3,
      strokeDashoffset: -200,
    });

    return () => {
      tl.current?.clear().kill();
    };
  }, [isActive]);

  return [tLetter, kLetter];
};
