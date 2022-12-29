import { useRef, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";

export const useChartSvgAnimation = (): [RefObject<SVGSVGElement>] => {
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const svgRef = useRef<SVGSVGElement>(null);
  const tl = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    if (!isActive) return;
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top center",
        end: "center bottom",
      },
    });

    tl.current.to(".chart-svg .path-background-line", {
      duration: 1,
      strokeDashoffset: 0,
    });
    tl.current.to(
      ".chart-svg .path-floor",
      {
        duration: 1,
        strokeDashoffset: 0,
      },
      "-=1"
    );
    tl.current.to(".chart-svg .path-table", {
      duration: 2,
      fill: "#935b50",
      strokeDashoffset: 0,
    });
    tl.current.to(
      ".chart-svg .path-table-bottom",
      {
        duration: 1,
        strokeDashoffset: 0,
      },
      "-=0.4"
    );
    tl.current.to(
      ".chart-svg .path-table-bottom",
      {
        duration: 1,
        fill: "#c38f86",
      },
      "-=0.4"
    );
    tl.current.to(".chart-svg .path-laptop", {
      duration: 0.6,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-elements", {
      duration: 1.5,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-cup", {
      duration: 0.3,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-pot", {
      duration: 0.5,
      opacity: 1,
      y: 0,
    });
    tl.current.to(".chart-svg .path-pot-elements", {
      duration: 0.6,
      scale: 1,
      stagger: 0.1,
    });
    tl.current.to(".chart-svg .path-leaf", {
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
    });
    tl.current.to(".chart-svg .path-dumpster-background", {
      duration: 0.4,
      opacity: 1,
    });
    tl.current.to(
      ".chart-svg .path-dumpster-top",
      {
        duration: 1,
        fill: "#904d24",
        strokeDashoffset: 0,
      },
      "dumpster"
    );
    tl.current.to(
      ".chart-svg .path-dumpster-dashes",
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "dumpster"
    );
    tl.current.to(
      ".chart-svg .path-chart-legs",
      {
        duration: 1,
        strokeDashoffset: 0,
      },
      "path-chart-legs"
    );
    tl.current.to(
      ".chart-svg .path-chart-legs",
      {
        duration: 1,
        delay: 0.5,
        fill: "#dc8758",
      },
      "path-chart-legs"
    );
    tl.current.to(
      ".chart-svg .path-chart-background",
      {
        duration: 1,
        delay: 0.5,
        opacity: 1,
      },
      "path-chart-legs"
    );
    tl.current.to(".chart-svg .path-chart-lines-first", {
      duration: 1,
      strokeDashoffset: 0,
    });
    tl.current.to(".chart-svg .path-chart-lines-second", {
      duration: 2.5,
      strokeDashoffset: 0,
    });
    tl.current.to(".chart-svg .path-chart-card", {
      duration: 1,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-leaf-5", {
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
    });
    tl.current.to(".chart-svg .path-cup", {
      duration: 0.3,
      opacity: 1,
      stagger: 0.1,
    });
    tl.current.to(".chart-svg .path-lamp-bottom", {
      duration: 0.7,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-lamp-middle", {
      duration: 0.7,
      strokeDashoffset: 0,
    });
    tl.current.to(".chart-svg .path-lamp-top", {
      duration: 0.7,
      opacity: 1,
    });
    tl.current.to(".chart-svg .path-background", {
      duration: 1,
      opacity: 1,
    });
    tl.current.to(
      ".chart-svg .path-leaf-1",
      {
        duration: 0.5,
        fill: "#558031",
      },
      "leaf"
    );
    tl.current.to(
      ".chart-svg .path-leaf-2",
      {
        duration: 0.5,
        fill: "#849f4c",
      },
      "leaf"
    );
    tl.current.to(
      ".chart-svg .path-leaf-3",
      {
        duration: 0.5,
        fill: "#a6b862",
      },
      "leaf"
    );

    return () => {
      tl.current?.clear().kill();
    };
  }, [isActive]);
  return [svgRef];
};
