import { useRef, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";

export const useChartSvgAnimation = (): [RefObject<SVGSVGElement>] => {
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

    refTimeline.current.to(".chart-svg .path-background-line", {
      duration: 0.8,
      strokeDashoffset: 0,
    });
    refTimeline.current.to(
      ".chart-svg .path-floor",
      {
        duration: 0.8,
        strokeDashoffset: 0,
      },
      "-=1"
    );
    refTimeline.current.to(".chart-svg .path-table", {
      duration: 1.6,
      fill: "#935b50",
      strokeDashoffset: 0,
    });
    refTimeline.current.to(
      ".chart-svg .path-table-bottom",
      {
        duration: 0.8,
        strokeDashoffset: 0,
      },
      "-=0.4"
    );
    refTimeline.current.to(
      ".chart-svg .path-table-bottom",
      {
        duration: 0.8,
        fill: "#c38f86",
      },
      "-=0.4"
    );
    refTimeline.current.to(".chart-svg .path-laptop", {
      duration: 0.4,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-elements", {
      duration: 1.3,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-cup", {
      duration: 0.2,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-pot", {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });
    refTimeline.current.to(".chart-svg .path-pot-elements", {
      duration: 0.4,
      scale: 1,
      stagger: 0.1,
    });
    refTimeline.current.to(".chart-svg .path-leaf", {
      duration: 0.2,
      opacity: 1,
      stagger: 0.1,
    });
    refTimeline.current.to(".chart-svg .path-dumpster-background", {
      duration: 0.3,
      opacity: 1,
    });
    refTimeline.current.to(
      ".chart-svg .path-dumpster-top",
      {
        duration: 0.8,
        fill: "#904d24",
        strokeDashoffset: 0,
      },
      "dumpster"
    );
    refTimeline.current.to(
      ".chart-svg .path-dumpster-dashes",
      {
        duration: 1.3,
        strokeDashoffset: 0,
      },
      "dumpster"
    );
    refTimeline.current.to(
      ".chart-svg .path-chart-legs",
      {
        duration: 0.8,
        strokeDashoffset: 0,
      },
      "path-chart-legs"
    );
    refTimeline.current.to(
      ".chart-svg .path-chart-legs",
      {
        duration: 0.8,
        delay: 0.5,
        fill: "#dc8758",
      },
      "path-chart-legs"
    );
    refTimeline.current.to(
      ".chart-svg .path-chart-background",
      {
        duration: 0.8,
        delay: 0.5,
        opacity: 1,
      },
      "path-chart-legs"
    );
    refTimeline.current.to(".chart-svg .path-chart-lines-first", {
      duration: 0.8,
      strokeDashoffset: 0,
    });
    refTimeline.current.to(".chart-svg .path-chart-lines-second", {
      duration: 2.2,
      strokeDashoffset: 0,
    });
    refTimeline.current.to(".chart-svg .path-chart-card", {
      duration: 0.8,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-leaf-5", {
      duration: 0.2,
      opacity: 1,
      stagger: 0.1,
    });
    refTimeline.current.to(".chart-svg .path-cup", {
      duration: 0.2,
      opacity: 1,
      stagger: 0.1,
    });
    refTimeline.current.to(".chart-svg .path-lamp-bottom", {
      duration: 0.6,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-lamp-middle", {
      duration: 0.6,
      strokeDashoffset: 0,
    });
    refTimeline.current.to(".chart-svg .path-lamp-top", {
      duration: 0.6,
      opacity: 1,
    });
    refTimeline.current.to(".chart-svg .path-background", {
      duration: 0.8,
      opacity: 1,
    });
    refTimeline.current.to(
      ".chart-svg .path-leaf-1",
      {
        duration: 0.4,
        fill: "#558031",
      },
      "leaf"
    );
    refTimeline.current.to(
      ".chart-svg .path-leaf-2",
      {
        duration: 0.4,
        fill: "#849f4c",
      },
      "leaf"
    );
    refTimeline.current.to(
      ".chart-svg .path-leaf-3",
      {
        duration: 0.4,
        fill: "#a6b862",
      },
      "leaf"
    );

    return () => {
      refTimeline.current?.clear().kill();
    };
  }, [isActive]);
  return [refSvg];
};
