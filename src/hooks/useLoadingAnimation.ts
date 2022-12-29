import { gsap } from "gsap";
import { useState, useRef, RefObject, ReactNode } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setIsInitAnimation } from "src/store/transition";
import { setActive } from "src/store/scrollTrigger";
import { isTruthy } from "src/helpers/checkFalsyType";

export const useLoadingAnimation = (
  children: ReactNode
): {
  displayChildren: ReactNode;
  content: RefObject<HTMLDivElement>;
  htmlBefore: RefObject<HTMLSpanElement>;
  htmlAfter: RefObject<HTMLSpanElement>;
  bodyBefore: RefObject<HTMLDivElement>;
} => {
  const { pathname, locale } = useRouter();
  const dispatch = useDispatch();

  const [displayChildren, setDisplayChildren] = useState<ReactNode>();
  const timeline = useRef<GSAPTimeline>();
  const timelineEnter = useRef<GSAPTimeline>();
  const content = useRef<HTMLDivElement>(null);
  const htmlBefore = useRef<HTMLSpanElement>(null);
  const htmlAfter = useRef<HTMLSpanElement>(null);
  const bodyBefore = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (timeline.current != null) return;
    timeline.current = gsap.timeline({ paused: true });
    timelineEnter.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240,
      }),
      "start"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }),
      "start"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }),
      "-=0.35"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0,
      }),
      "back"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }),
      "back"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50,
      }),
      "-=0.35"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240,
      }),
      "start2"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }),
      "start2"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }),
      "-=0.35"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0,
      }),
      "back2"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }),
      "back2"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50,
      }),
      "-=0.35"
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        scale: 3,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.7,
        opacity: 1,
      })
    );
    const svgPaths = isTruthy(htmlAfter.current)
      ? htmlAfter.current.querySelectorAll("svg path")
      : [];
    timeline.current.add(
      gsap.to(svgPaths, {
        duration: 2,
        strokeDashoffset: 0,
      })
    );
    timeline.current.add(
      gsap.to(svgPaths, {
        duration: 1,
        fill: "#fff",
      })
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 50,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.35,
        opacity: 0,
      }),
      "-=0.7"
    );

    timelineEnter.current.add(
      gsap.to(bodyBefore.current, {
        delay: 1,
        duration: 1,
        height: "100%",
      })
    );
    timelineEnter.current.add(
      gsap.to(content.current, {
        duration: 0.4,
        opacity: 1,
        pointerEvents: "all",
        overflow: "none",
        height: "auto",
      })
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (timeline.current == null) return;

    if (!timeline.current.isActive()) {
      timeline.current
        .play()
        .then(() => {
          timeline.current?.pause();
          dispatch(setIsInitAnimation(false));
          // timeline.current.seek(0).pause().clear()
          setDisplayChildren(children);

          timelineEnter.current
            ?.play()
            .then(() => {
              dispatch(setActive(true));
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [timeline.current, locale, pathname]);
  return { displayChildren, content, htmlBefore, htmlAfter, bodyBefore };
};
