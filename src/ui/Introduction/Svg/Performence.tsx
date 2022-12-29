import React, { useRef, FC } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import styled from "styled-components";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";

const Svg = styled.svg`
  .path-background,
  .path-person,
  .path-dot-1,
  .path-dot-2,
  .path-dot-3,
  .path-bottom-line {
    opacity: 0;
  }
  .path-progress-line {
    stroke-dasharray: 800;
    stroke-dashoffset: -800;
  }
  .path-bar-1,
  .path-bar-2,
  .path-bar-3,
  .path-bar-4 {
    transform: scaleY(0);
    transform-origin: bottom !important;
  }
`;

// TODO: extract style & animation to separate files (style & hook)
const PerformenceComponent: FC = () => {
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
    tl.current.to(".path-bottom-line", {
      duration: 0.7,
      opacity: 1,
      delay: 0.5,
    });
    tl.current.to(".path-bar-1", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    tl.current.to(".path-bar-2", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    tl.current.to(".path-bar-3", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    tl.current.to(".path-bar-4", {
      duration: 0.6,
      transform: "scaleY(1)",
    });
    tl.current.to(
      ".path-dot-1",
      {
        duration: 0.4,
        opacity: 1,
      },
      "dot-1"
    );
    tl.current.to(".path-dot-2", {
      duration: 0.4,
      opacity: 1,
    });
    tl.current.to(".path-dot-3", {
      duration: 0.4,
      opacity: 1,
    });
    tl.current.to(
      ".path-progress-line",
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "dot-1"
    );
    tl.current.to(
      ".path-person",
      {
        duration: 0.8,
        opacity: 1,
      },
      "-=0.5"
    );
    tl.current.to(".path-background", {
      duration: 0.7,
      opacity: 0.18,
    });
  }, [isActive]);
  return (
    <Svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 702.65 597"
    >
      <defs>
        <linearGradient
          id="a"
          x1="710.31"
          x2="621.38"
          y1="81.73"
          y2="171.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="103.52"
          x2="112.71"
          y1="-1.81"
          y2="817.84"
          gradientTransform="rotate(45 106.603 272.726)"
          xlinkHref="#a"
        />
        <linearGradient
          id="d"
          x1="323.23"
          x2="332.41"
          y1="-4.28"
          y2="815.38"
          gradientTransform="rotate(45 324.147 77.866)"
          xlinkHref="#a"
        />
        <linearGradient
          id="e"
          x1="501.56"
          x2="510.75"
          y1="-6.27"
          y2="813.38"
          gradientTransform="rotate(27.01 503.781 196.019)"
          xlinkHref="#a"
        />
        <linearGradient
          id="f"
          x1="407.17"
          x2="417.81"
          y1="508.54"
          y2="885.72"
          xlinkHref="#a"
        />
        <linearGradient
          id="g"
          x1="665.31"
          x2="532.61"
          y1="104.43"
          y2="137.07"
          xlinkHref="#a"
        />
        <linearGradient
          id="b"
          x1="672.42"
          x2="677.88"
          y1="38.04"
          y2="53.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ecc4d7" />
          <stop offset=".42" stopColor="#efd4d1" />
          <stop offset="1" stopColor="#f2eac9" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="679.99"
          x2="684.67"
          y1="20.67"
          y2="34.88"
          xlinkHref="#b"
        />
        <linearGradient
          id="i"
          x1="651.54"
          x2="800.85"
          y1="80.31"
          y2="142.39"
          xlinkHref="#a"
        />
        <linearGradient
          id="j"
          x1="732.43"
          x2="744.33"
          y1="90.2"
          y2="90.2"
          xlinkHref="#b"
        />
        <linearGradient
          id="k"
          x1="669.3"
          x2="692.9"
          y1="124.79"
          y2="124.79"
          xlinkHref="#b"
        />
      </defs>
      <path
        className="path-background"
        fill="#68e1fd"
        d="M213.14,113.68C261.48,71.85,335.37,43.2,387.62,80.05c26.48,18.67,40.71,49.92,62.21,74.16s59.55,41.34,85.58,22c12-8.9,18.24-23.4,27.47-35.15,27.46-35,82.19-41.46,120.9-19.58s61,66.78,62.88,111.22c2,49.14-17.87,96.41-23.65,145.25a256.21,256.21,0,0,0,21.15,135.57c6.41,14.07,14.23,28,15.84,43.34s-5.09,33-19.65,38.24c-5.91,2.11-12.36,2-18.63,1.76L118.83,578.81c-12.44-.37-25.36-.87-36.39-6.62-30.38-15.87-29.32-60.43-15.85-91.94s35.34-62.11,32.3-96.25C94.37,333.32,34,286.17,74.1,236c14.56-18.24,42.13-30.05,59.8-45.73C161.39,165.85,185.33,137.75,213.14,113.68Z"
        opacity=".18"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#68e1fd"
        d="M702.62,61.32s8.11,39.08,15,42.07,14.45-9.29,15-9.18,8,8.2,8,8.2-4.3,12.84-17.53,16.87c-7.34,2.23-28.72-21.5-31.7-35.79a104.52,104.52,0,0,1-1-36.53S698.77,49.16,702.62,61.32Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#a)"
        d="M702.62,61.32s8.11,39.08,15,42.07,14.45-9.29,15-9.18,8,8.2,8,8.2-4.3,12.84-17.53,16.87c-7.34,2.23-28.72-21.5-31.7-35.79a104.52,104.52,0,0,1-1-36.53S698.77,49.16,702.62,61.32Z"
        transform="translate(-57.59)"
      />
      <polyline
        className="path-progress-line"
        fill="none"
        stroke="#004879"
        strokeMiterlimit="10"
        strokeWidth="9.96"
        points="592.41 85.06 446.24 199.05 266.56 77.87 49.01 272.72"
      />
      <rect
        className="path-bar-1"
        width="74.54"
        height="229.96"
        x="49.61"
        y="352.89"
        fill="#68e1fd"
      />
      <rect
        className="path-bar-2"
        width="74.54"
        height="407.44"
        x="229.29"
        y="175.41"
        fill="#68e1fd"
      />
      <rect
        className="path-bar-3"
        width="74.54"
        height="303.58"
        x="408.97"
        y="279.27"
        fill="#68e1fd"
      />
      <rect
        className="path-bar-4"
        width="74.54"
        height="428.36"
        x="588.65"
        y="154.48"
        fill="#68e1fd"
      />
      <circle
        className="path-dot-1"
        cx="106.6"
        cy="272.72"
        r="18.09"
        fill="#68e1fd"
        transform="rotate(-45 77.81 342.24)"
      />
      <circle
        className="path-dot-2"
        cx="324.15"
        cy="77.87"
        r="18.09"
        fill="#68e1fd"
        transform="rotate(-45 295.36 147.388)"
      />
      <circle
        className="path-dot-3"
        cx="503.83"
        cy="196.06"
        r="18.09"
        fill="#68e1fd"
        transform="rotate(-27.01 474.976 315.949)"
      />
      <circle
        className="path-dot-1"
        cx="106.6"
        cy="272.72"
        r="18.09"
        fill="url(#c)"
        transform="rotate(-45 77.81 342.24)"
      />
      <circle
        className="path-dot-2"
        cx="324.15"
        cy="77.87"
        r="18.09"
        fill="url(#d)"
        transform="rotate(-45 295.36 147.388)"
      />
      <circle
        className="path-dot-3"
        cx="503.83"
        cy="196.06"
        r="18.09"
        fill="url(#e)"
        transform="rotate(-27.01 474.976 315.949)"
      />
      <path
        className="path-bottom-line"
        fill="#68e1fd"
        d="M747,596.09H71.55a13.24,13.24,0,0,1-13.24-13.24h0a13.24,13.24,0,0,1,13.24-13.24H747a13.24,13.24,0,0,1,13.24,13.24h0A13.24,13.24,0,0,1,747,596.09Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#f)"
        d="M747,596.09H71.55a13.24,13.24,0,0,1-13.24-13.24h0a13.24,13.24,0,0,1,13.24-13.24H747a13.24,13.24,0,0,1,13.24,13.24h0A13.24,13.24,0,0,1,747,596.09Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#68e1fd"
        d="M667.86,49s-15.47,3.41-21.62,11.52-6.84,74.23-2,78.62,59.62-4.59,55.33-12.72C691.43,111,698.4,46.92,690.42,47S667.86,49,667.86,49Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#g)"
        d="M660.54,73.19s-13.52,56.15-5.1,66.32c0,0-8.19,2.22-11.21-.4s-4.91-36,.25-51S660.54,73.19,660.54,73.19Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#b)"
        d="M668.89,33.34s-1.53,12.08-1.65,15.78,11.48,9.58,14.1,5.93a9,9,0,0,0,1.53-7.34l-.77-8Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#h)"
        d="M668,20.22s-1,16.83,4.77,20.34,9,7,16.13-1.12,6.35-21.6,4.79-23.57S672.91,2.13,668,20.22Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#3f3d56"
        d="M661.81,9c-1.55,3.71-1.34,7.88-1.11,11.89l1.64,0c-.32,2.12-.5,4.65,1.13,6,.45.38,1,.63,1.44,1,1.67,1.45,2,5.08,4,6-.25-3-.51-6-.77-9-.13-1.53-.37-4.12,1.12-4.5.34-.08.71-.06,1-.16A2.84,2.84,0,0,0,671.71,19c.58-.87,1.15-1.74,1.72-2.62a6.64,6.64,0,0,1,2.94-2.9c1.31-.49,3.15.28,3.17,1.68,2.82-2.06,6.79-1.48,10-.16a12.1,12.1,0,0,1,4.5,2.91,5.86,5.86,0,0,1,1.54,5c2.33-8.06,4.94-25.76-12.44-22.43-2.54.49-4.67,2.42-7.25,2.6.31,0-.81-1.24-1-1.33-.89-.38-1.6.14-2.39.48A15.91,15.91,0,0,1,668.7,3,9.89,9.89,0,0,0,661.81,9Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#68e1fd"
        d="M649.74,57s12.92,3.65,10.8,16.18c0,0-17.08,17.45-15.4,21s32.68,22.09,32.68,22.09l-9.88,8.13s-36.82-13.18-39.35-25S632.17,69.25,649.74,57Z"
        transform="translate(-57.59)"
      />
      <polygon
        className="path-person"
        fill="#68e1fd"
        points="684.26 64.89 673.46 104.45 645.03 106.63 653.68 63.49 684.26 64.89"
      />
      <polygon
        className="path-person"
        fill="url(#i)"
        points="684.26 64.89 673.46 104.45 645.03 106.63 653.68 63.49 684.26 64.89"
      />
      <path
        className="path-person"
        fill="url(#j)"
        d="M733.64,94.4a1.3,1.3,0,0,0,0,.65,1.6,1.6,0,0,0,.6.64c1.7,1.34,2.42,3.9,4.47,4.58a20.31,20.31,0,0,0,4.19-5.91,11.52,11.52,0,0,0,1-8.12,9.53,9.53,0,0,0-4.67-5.43,3.76,3.76,0,0,0-3.28-.45,3.42,3.42,0,0,0-1.65,2.38c-.24,1-.28,2-.59,2.94a28.52,28.52,0,0,0-1.3,3.27,2.71,2.71,0,0,0,.74,2.44c.36.38.52.22.69.7A7.41,7.41,0,0,1,733.64,94.4Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="url(#k)"
        d="M684.53,117.33a1.64,1.64,0,0,1,1.35.43,1.35,1.35,0,0,1-.22,1.57,6,6,0,0,0-1,1.35A34.34,34.34,0,0,0,690,124.1c1.31.69,2.86,1.56,2.92,3a3.46,3.46,0,0,1-1.81,2.75c-3,2-6.71,2.57-10.29,2.41a11.08,11.08,0,0,1-6.06-1.68,13.31,13.31,0,0,1-2.82-3.07l-2.46-3.32a.41.41,0,0,1,0-.65l2.93-3.22C675.88,116.55,679.69,117.28,684.53,117.33Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#3f3d56"
        d="M726.13,218.08c-2.63,2.22-4.86-.83-5.29-3.32a53.77,53.77,0,0,1-.65-8.41q-.51-22.47-1-44.94c0-1.43-.11-3-1-4.06-1.1-1.26-3-1.43-4.61-1.5l-2.8-.13-41.21-1.95c-5.1-.24-10.34-.51-15-2.6s-8.67-6.43-8.81-11.54c.08,2.77,36-4.91,39.06-5.94,5.68-1.89,10.38-4.63,16.27-4.52,6.74.13,13.69,1.33,20.4,1.92,5.75.51,11.92,1.18,16.28,4.95,4.67,4,6.13,10.59,6.51,16.73C745.67,177.05,737.11,196.38,726.13,218.08Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#25233a"
        d="M723.41,217.61l-4-2.21a50.16,50.16,0,0,0,.81-9.05q-.51-22.47-1-44.94c0-1.43-.11-3-1-4.06-1.1-1.26-3-1.43-4.61-1.5l-2.8-.13-5.16-10s17.29.06,21.22,5.67S723.41,217.61,723.41,217.61Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#3f3d56"
        d="M716.82,169c0,3.76-1.27,7.41-2.63,10.92-3,7.75-6.38,15.3-9.8,22.85q-5.55,12.22-11.09,24.47c-.65,1.43-1.54,3.06-3.1,3.29-1.83.26-2.92-1.41-3.41-3.37a10.34,10.34,0,0,1-.31-2.67q.15-23.13,1.9-46.22a5.46,5.46,0,0,0-.26-2.7,5.22,5.22,0,0,0-2.25-2c-7.09-4.14-14.78-7.1-22-11s-14.16-8.86-18.42-15.86a4.57,4.57,0,0,1-.92-3.22c.41-1.94,2.77-2.62,4.72-2.93l40.22-6.45c9-1.45,15.74,11.52,20.23,17.8C713.34,157,716.82,162.66,716.82,169Z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#25233a"
        d="M686.47 224.44l-3 13.32s10.16 7.15 13.11 8 12.76 0 12.76 0 1.54-4.07-3.65-5.89a60.28 60.28 0 00-10-2.52 12.22 12.22 0 01-2.95-8.42S688.81 229.64 686.47 224.44zM719.78 213.6l-3 13.31s10.16 7.16 13.11 8 12.76 0 12.76 0 1.54-4.07-3.65-5.89a61 61 0 00-10-2.53 12.18 12.18 0 01-3-8.41S722.12 218.8 719.78 213.6z"
        transform="translate(-57.59)"
      />
      <path
        className="path-person"
        fill="#25233a"
        d="M690.2,230.48l-3.41-3.37a10.34,10.34,0,0,1-.31-2.67q.15-23.13,1.9-46.22a5.46,5.46,0,0,0-.26-2.7,5.22,5.22,0,0,0-2.25-2c-7.09-4.14-14.78-7.1-22-11s-14.16-8.86-18.42-15.86a4.57,4.57,0,0,1-.92-3.22c.41-1.94,2.77-2.62,4.72-2.93,0,0,30.3,18.9,41.9,26.75S690.2,230.48,690.2,230.48Z"
        transform="translate(-57.59)"
      />
    </Svg>
  );
};

export default PerformenceComponent;
