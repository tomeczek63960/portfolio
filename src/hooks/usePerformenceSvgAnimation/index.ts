import { useRef, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";

export const usePerformenceSvgAnimation = (): [RefObject<SVGSVGElement>] => {
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const refSvg = useRef<SVGSVGElement>(null);
  const refTimeline = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    refTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: refSvg.current,
        start: "top 80% center",
        end: "center bottom",
      },
    });
    refTimeline.current.to(".performence-svg .path-bottom-line", {
      duration: 0.7,
      opacity: 1,
      delay: 0.5,
    });
    refTimeline.current.to(".performence-svg .path-bar-1", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    refTimeline.current.to(".performence-svg .path-bar-2", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    refTimeline.current.to(".performence-svg .path-bar-3", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    refTimeline.current.to(".performence-svg .path-bar-4", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    refTimeline.current.to(
      ".performence-svg .path-dot-1",
      {
        duration: 0.4,
        opacity: 1,
      },
      "dot-1"
    );
    refTimeline.current.to(".performence-svg .path-dot-2", {
      duration: 0.4,
      opacity: 1,
    });
    refTimeline.current.to(".performence-svg .path-dot-3", {
      duration: 0.4,
      opacity: 1,
    });
    refTimeline.current.to(
      ".performence-svg .path-progress-line",
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "dot-1"
    );
    refTimeline.current.to(
      ".performence-svg .path-person",
      {
        duration: 0.8,
        opacity: 1,
      },
      "-=0.5"
    );
    refTimeline.current.to(".performence-svg .path-background", {
      duration: 0.7,
      opacity: 0.18,
    });
    return () => {
      refTimeline.current?.clear().kill();
    };
  }, [isActive]);
  return [refSvg];
};
