import { useState, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { setActive } from "src/store/scrollTrigger";
import { isTruthy } from "src/helpers/checkFalsyType";
import { ITransitionLayoutReturn } from "./types";
import { useErrorHandler } from "../useErrorHandler";

export const useTransitionLayoutAnimation = (
  children: ReactNode
): ITransitionLayoutReturn => {
  const dispatch = useDispatch();
  const { pathname, locale } = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isInitAnimation } = useSelector(
    (state: IRootState) => state.transition
  );
  const refTimeline = useRef(gsap.timeline({ paused: true }));
  const refTimelineEnter = useRef<GSAPTimeline>();
  const refContent = useRef<HTMLDivElement>(null);
  const refLeftTransition = useRef<HTMLDivElement>(null);
  const refRightTransition = useRef<HTMLDivElement>(null);
  const refCenterCircle = useRef<HTMLDivElement>(null);
  const refLeftCircle = useRef<HTMLSpanElement>(null);
  const refRightCircle = useRef<HTMLSpanElement>(null);
  const refFlag = useRef<boolean>(false);
  const [setError] = useErrorHandler();
  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    if (!shouldAnimate) {
      setDisplayChildren(children);
      return setShouldAnimate(true);
    }
    refTimeline.current.add(
      gsap.to(refContent.current, {
        duration: 1,
        opacity: 0,
        pointerEvents: "none",
      }),
      0
    );
    refTimeline.current.add(
      gsap.to(refLeftTransition.current, {
        duration: 1,
        y: "0%",
      }),
      0
    );
    refTimeline.current.add(
      gsap.to(refRightTransition.current, {
        duration: 1,
        y: "0%",
      }),
      0
    );

    dispatch(setActive(false));
    refTimeline.current
      .play()
      .then(() => {
        refTimeline.current.seek(0).pause().clear().kill();
        gsap.set(refLeftTransition.current, {
          y: "0%",
        });
        gsap.set(refRightTransition.current, {
          y: "0%",
        });
        setDisplayChildren(children);
        refFlag.current = true;
        pageTransition();
      })
      .catch(() => {
        setError();
      });
  }, [pathname, locale, children]);
  const pageTransition = (): void => {
    if (!refFlag.current) return;
    refFlag.current = false;
    refTimelineEnter.current = gsap.timeline({ paused: false });
    refTimelineEnter.current.set(
      [refLeftTransition.current, refRightTransition.current],
      {
        y: "0%",
      }
    );
    refTimelineEnter.current.set(refContent.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    refTimelineEnter.current.to(refCenterCircle.current, {
      duration: 0.6,
      opacity: 1,
    });
    refTimelineEnter.current.to(
      refLeftCircle.current,
      {
        duration: 1,
        scaleY: 1,
      },
      "circle"
    );
    refTimelineEnter.current.to(
      refRightCircle.current,
      {
        duration: 1,
        scaleY: 1,
      },
      "circle"
    );
    const leftLetterG = isTruthy(refLeftCircle.current)
      ? refLeftCircle.current.querySelector("svg g")
      : null;
    const rightLetterG = isTruthy(refRightCircle.current)
      ? refRightCircle.current.querySelector("svg g")
      : null;
    const leftLetter = isTruthy(refLeftCircle.current)
      ? refLeftCircle.current.querySelector("svg path")
      : null;
    const rightLetter = isTruthy(refRightCircle.current)
      ? refRightCircle.current.querySelector("svg path")
      : null;

    refTimelineEnter.current.set(leftLetterG, {
      stroke: "#fff",
    });
    refTimelineEnter.current.set(rightLetterG, {
      stroke: "#000",
    });
    refTimelineEnter.current.to([leftLetter, rightLetter], {
      duration: 1.5,
      strokeDashoffset: 0,
    });

    refTimelineEnter.current.to(leftLetter, {
      duration: 1.5,
      fill: "#fff",
    });
    refTimelineEnter.current.to(
      rightLetter,
      {
        duration: 1.5,
        fill: "#000",
      },
      "-=1"
    );
    refTimelineEnter.current.to(
      refLeftTransition.current,
      {
        duration: 1,
        y: "-100%",
      },
      "start"
    );
    refTimelineEnter.current.to(
      refRightTransition.current,
      {
        duration: 1,
        y: "100%",
      },
      "start"
    );
    refTimelineEnter.current.to(refContent.current, {
      duration: 1,
      opacity: 1,
    });
    refTimelineEnter.current.to(refCenterCircle.current, {
      duration: 0.4,
      opacity: 0,
    });

    refTimelineEnter.current.set([leftLetter, rightLetter], {
      strokeDashoffset: 250,
      fill: "none",
    });
    refTimelineEnter.current.set(refContent.current, {
      pointerEvents: "all",
    });
    refTimelineEnter.current.set(refLeftTransition.current, {
      y: "100%",
    });
    refTimelineEnter.current.set(refRightTransition.current, {
      y: "-100%",
    });
    refTimelineEnter.current.set(refCenterCircle.current, {
      opacity: 0,
    });
    refTimelineEnter.current.set(
      [refLeftCircle.current, refRightCircle.current],
      {
        scaleY: 0,
      }
    );
    refTimelineEnter.current.call(() => {
      dispatch(setActive(true));
      refTimelineEnter.current?.clear().kill();
    });
  };

  return {
    displayChildren,
    refContent,
    refLeftTransition,
    refRightTransition,
    refCenterCircle,
    refLeftCircle,
    refRightCircle,
  };
};
