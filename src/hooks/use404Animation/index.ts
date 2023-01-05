import { useRef, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";

export const use404Animation = (): [RefObject<SVGSVGElement>] => {
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const refSvg = useRef<SVGSVGElement>(null);
  const refTimeline = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    refTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: refSvg.current,
        start: "top center",
        end: "center bottom",
      },
    });

    refTimeline.current.to(".svg-404 .svg-404-floor", {
      duration: 1,
      strokeDashoffset: 0,
    });

    refTimeline.current.to(".svg-404 .svg-404-plate", {
      duration: 1,
      opacity: 1,
    });
    refTimeline.current.to(".svg-404 .svg-404-plants", {
      duration: 1,
      opacity: 1,
    });
    refTimeline.current.to(
      ".svg-404 .svg-404-background > path, .svg-404 .svg-404-background > g",
      {
        duration: 0.7,
        opacity: 1,
        stagger: 0.4,
      },
      "monster"
    );
    refTimeline.current.to(
      ".svg-404 .svg-404-monster",
      {
        duration: 2,
        opacity: 1,
      },
      "monster"
    );
    refTimeline.current.to(
      ".svg-404 .svg-404-ballon",
      {
        duration: 1,
        opacity: 1,
      },
      "monster"
    );
    refTimeline.current.to(".svg-404 .svg-404-lightning polygon", {
      duration: 1,
      strokeDashoffset: 0,
    });
    refTimeline.current.to(".svg-404 .svg-404-lightning polygon", {
      duration: 1,
      fill: "#ff725e",
    });

    return () => {
      refTimeline.current?.clear().kill();
    };
  }, [isActive]);
  return [refSvg];
};
