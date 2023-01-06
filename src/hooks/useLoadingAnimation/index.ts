import { gsap } from "gsap";
import { useState, useRef, RefObject, ReactNode } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsInitAnimation } from "src/store/transition";
import { setActive } from "src/store/scrollTrigger";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import { useErrorHandler } from "../useErrorHandler";

export const useLoadingAnimation = (
  children: ReactNode
): {
  displayChildren: ReactNode;
  refPageContent: RefObject<HTMLDivElement>;
  refPageAnimationBall: RefObject<HTMLSpanElement>;
  refPageAnimationText: RefObject<HTMLSpanElement>;
  refPageAnimationBackground: RefObject<HTMLDivElement>;
} => {
  const { pathname, locale, query } = useRouter();
  const dispatch = useDispatch();
  const [displayChildren, setDisplayChildren] = useState<ReactNode>();
  const refTimeline = useRef<GSAPTimeline>();
  const refTimelineEnter = useRef<GSAPTimeline>();
  const refPageContent = useRef<HTMLDivElement>(null);
  const refPageAnimationBall = useRef<HTMLSpanElement>(null);
  const refPageAnimationText = useRef<HTMLSpanElement>(null);
  const refPageAnimationBackground = useRef<HTMLDivElement>(null);
  const [setError] = useErrorHandler();
  useIsomorphicLayoutEffect(() => {
    refTimeline.current = gsap.timeline({ paused: true });
    refTimelineEnter.current = gsap.timeline({ paused: true });
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.7,
        y: 240,
      }),
      "start"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        width: 40,
      }),
      "start"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }),
      "-=0.35"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.7,
        y: 0,
      }),
      "back"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        height: 50,
      }),
      "back"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        width: 50,
      }),
      "-=0.35"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.7,
        y: 240,
      }),
      "start2"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        width: 40,
      }),
      "start2"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }),
      "-=0.35"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.7,
        y: 0,
      }),
      "back2"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        height: 50,
      }),
      "back2"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.35,
        width: 50,
      }),
      "-=0.35"
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 0.7,
        scale: 3,
      })
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationText.current, {
        duration: 0.7,
        opacity: 1,
      })
    );
    const svgPaths = isTruthy(refPageAnimationText.current)
      ? refPageAnimationText.current.querySelectorAll("svg path")
      : [];
    refTimeline.current.add(
      gsap.to(svgPaths, {
        duration: 2,
        strokeDashoffset: 0,
      })
    );
    refTimeline.current.add(
      gsap.to(svgPaths, {
        duration: 1,
        fill: "#fff",
      })
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationBall.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 50,
      })
    );
    refTimeline.current.add(
      gsap.to(refPageAnimationText.current, {
        duration: 0.35,
        opacity: 0,
      }),
      "-=0.7"
    );

    refTimelineEnter.current.add(
      gsap.to(refPageAnimationBackground.current, {
        delay: 1,
        duration: 1,
        height: "100%",
      })
    );
    refTimelineEnter.current.add(
      gsap.to(refPageContent.current, {
        duration: 0.4,
        opacity: 1,
        pointerEvents: "all",
        overflow: "none",
        height: "auto",
      })
    );
    return () => {
      refTimeline.current?.clear().kill();
      refTimelineEnter.current?.clear().kill();
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (isFalsy(refTimeline.current)) return;

    if (!refTimeline.current.isActive()) {
      refTimeline.current
        .play()
        .then(() => {
          refTimeline.current?.pause();
          dispatch(setIsInitAnimation(false));
          // refTimeline.current.seek(0).pause().clear()
          setDisplayChildren(children);

          refTimelineEnter.current
            ?.play()
            .then(() => {
              dispatch(setActive(true));
            })
            .catch(() => {
              setError();
            });
        })
        .catch(() => {
          setError();
        });
    }
  }, [refTimeline.current, locale, pathname, query]);
  return {
    displayChildren,
    refPageContent,
    refPageAnimationBall,
    refPageAnimationText,
    refPageAnimationBackground,
  };
};
