import { gsap } from "gsap";
import { useState, useRef } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { setActive } from "src/store/scrollTrigger";
import { isTruthy } from "src/helpers/checkFalsyType";

export const useTransitionLayoutAnimation = (
  children: React.ReactNode
): {
  displayChildren: React.ReactNode;
  content: React.RefObject<HTMLDivElement>;
  leftTransition: React.RefObject<HTMLDivElement>;
  rightTransition: React.RefObject<HTMLDivElement>;
  centerCircle: React.RefObject<HTMLDivElement>;
  leftCircle: React.RefObject<HTMLSpanElement>;
  rightCircle: React.RefObject<HTMLSpanElement>;
  htmlTextLeftWrapper: React.RefObject<HTMLDivElement>;
  htmlTextRightWrapper: React.RefObject<HTMLDivElement>;
} => {
  const dispatch = useDispatch();
  const { pathname, locale } = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const enterTl = useRef<any>(null);
  const { isInitAnimation } = useSelector(
    (state: IRootState) => state.transition
  );
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  const leftTransition = useRef<HTMLDivElement>(null);
  const rightTransition = useRef<HTMLDivElement>(null);
  const centerCircle = useRef<HTMLDivElement>(null);
  const leftCircle = useRef<HTMLSpanElement>(null);
  const rightCircle = useRef<HTMLSpanElement>(null);
  const flag = useRef<boolean>(false);
  const htmlTextLeftWrapper = useRef<HTMLDivElement>(null);
  const htmlTextRightWrapper = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    if (!shouldAnimate) {
      setDisplayChildren(children);
      return setShouldAnimate(true);
    }
    timeline.current.add(
      gsap.to(content.current, {
        duration: 1,
        opacity: 0,
        pointerEvents: "none",
      }),
      0
    );
    timeline.current.add(
      gsap.to(leftTransition.current, {
        duration: 1,
        y: "0%",
      }),
      0
    );
    timeline.current.add(
      gsap.to(rightTransition.current, {
        duration: 1,
        y: "0%",
      }),
      0
    );

    dispatch(setActive(false));
    timeline.current
      .play()
      .then(() => {
        timeline.current.seek(0).pause().clear().kill();
        gsap.set(leftTransition.current, {
          y: "0%",
        });
        gsap.set(rightTransition.current, {
          y: "0%",
        });
        setDisplayChildren(children);
        flag.current = true;
        pageTransition();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathname, locale, children]);
  const pageTransition = (): void => {
    if (!flag.current) return;
    flag.current = false;
    enterTl.current = gsap.timeline({ paused: false });
    enterTl.current.set(leftTransition.current, {
      y: "0%",
    });
    enterTl.current.set(rightTransition.current, {
      y: "0%",
    });
    enterTl.current.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.current.set(content.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    enterTl.current.to(
      centerCircle.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );
    enterTl.current.to(
      htmlTextLeftWrapper.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );
    enterTl.current.to(
      htmlTextRightWrapper.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );

    enterTl.current.to(
      leftCircle.current,
      {
        duration: 1,
        scaleY: 1,
      },
      "circle"
    );
    enterTl.current.to(
      rightCircle.current,
      {
        duration: 1,
        scaleY: 1,
      },
      "circle"
    );
    const leftLetter = isTruthy(leftCircle.current)
      ? leftCircle.current.querySelector("svg path")
      : null;
    const rightLetter = isTruthy(rightCircle.current)
      ? rightCircle.current.querySelector("svg path")
      : null;

    enterTl.current.to(
      leftLetter,
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "circle-letter"
    );
    enterTl.current.to(
      rightLetter,
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "circle-letter"
    );

    enterTl.current.to(
      leftLetter,
      {
        duration: 1.5,
        delay: 1,
        fill: "#fff",
      },
      "circle-letter"
    );
    enterTl.current.to(
      rightLetter,
      {
        duration: 1.5,
        delay: 1.5,
        fill: "#000",
      },
      "circle-letter"
    );
    enterTl.current.to(
      leftTransition.current,
      {
        duration: 1,
        y: "-100%",
      },
      "start"
    );
    enterTl.current.to(
      rightTransition.current,
      {
        duration: 1,
        y: "100%",
      },
      "start"
    );
    enterTl.current.to(
      htmlTextLeftWrapper.current,
      {
        duration: 0.3,
        opacity: 0,
      },
      "animation-end"
    );
    enterTl.current.to(
      htmlTextRightWrapper.current,
      {
        duration: 0.3,
        opacity: 0,
      },
      "animation-end"
    );
    enterTl.current.to(
      content.current,
      {
        duration: 1,
        opacity: 1,
      },
      "animation-end"
    );
    enterTl.current.to(centerCircle.current, {
      duration: 0.3,
      opacity: 0,
    });

    enterTl.current.set(leftLetter, {
      strokeDashoffset: 250,
      fill: "none",
    });
    enterTl.current.set(rightLetter, {
      strokeDashoffset: 250,
      fill: "none",
    });
    enterTl.current.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.current.set(content.current, {
      pointerEvents: "all",
    });
    enterTl.current.set(leftTransition.current, {
      y: "100%",
    });
    enterTl.current.set(rightTransition.current, {
      y: "-100%",
    });
    enterTl.current.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.current.set(leftCircle.current, {
      scaleY: 0,
    });
    enterTl.current.set(rightCircle.current, {
      scaleY: 0,
    });
    enterTl.current.call(() => {
      dispatch(setActive(true));
      enterTl.current.clear().kill();
    });
  };

  return {
    displayChildren,
    content,
    leftTransition,
    rightTransition,
    centerCircle,
    leftCircle,
    rightCircle,
    htmlTextLeftWrapper,
    htmlTextRightWrapper,
  };
};
