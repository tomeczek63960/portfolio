import { gsap } from "gsap";
import { useState, useRef } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { setActive } from "src/store/scrollTrigger";
import { isTruthy } from "src/helpers/checkFalsyType";

// TODO: check if gsap.timeline should/have to be inited in useEffect
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
        timeline.current.seek(0).pause().clear();
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
    const enterTl = gsap.timeline({ paused: false });
    enterTl.set(leftTransition.current, {
      y: "0%",
    });
    enterTl.set(rightTransition.current, {
      y: "0%",
    });
    enterTl.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.set(content.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    enterTl.to(
      centerCircle.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );
    enterTl.to(
      htmlTextLeftWrapper.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );
    enterTl.to(
      htmlTextRightWrapper.current,
      {
        duration: 0.7,
        opacity: 1,
      },
      "circle-show"
    );

    enterTl.to(
      leftCircle.current,
      {
        duration: 1,
        scaleY: 1,
      },
      "circle"
    );
    enterTl.to(
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

    enterTl.to(
      leftLetter,
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "circle-letter"
    );
    enterTl.to(
      rightLetter,
      {
        duration: 1.5,
        strokeDashoffset: 0,
      },
      "circle-letter"
    );

    enterTl.to(
      leftLetter,
      {
        duration: 1.5,
        delay: 1,
        fill: "#fff",
      },
      "circle-letter"
    );
    enterTl.to(
      rightLetter,
      {
        duration: 1.5,
        delay: 1.5,
        fill: "#000",
      },
      "circle-letter"
    );
    enterTl.to(
      leftTransition.current,
      {
        duration: 1,
        y: "-100%",
      },
      "start"
    );
    enterTl.to(
      rightTransition.current,
      {
        duration: 1,
        y: "100%",
      },
      "start"
    );
    enterTl.to(
      htmlTextLeftWrapper.current,
      {
        duration: 0.3,
        opacity: 0,
      },
      "animation-end"
    );
    enterTl.to(
      htmlTextRightWrapper.current,
      {
        duration: 0.3,
        opacity: 0,
      },
      "animation-end"
    );
    enterTl.to(
      content.current,
      {
        duration: 1,
        opacity: 1,
      },
      "animation-end"
    );
    enterTl.to(centerCircle.current, {
      duration: 0.3,
      opacity: 0,
    });

    enterTl.set(leftLetter, {
      strokeDashoffset: 250,
      fill: "none",
    });
    enterTl.set(rightLetter, {
      strokeDashoffset: 250,
      fill: "none",
    });
    enterTl.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.set(content.current, {
      pointerEvents: "all",
    });
    enterTl.set(leftTransition.current, {
      y: "100%",
    });
    enterTl.set(rightTransition.current, {
      y: "-100%",
    });
    enterTl.set(centerCircle.current, {
      opacity: 0,
    });
    enterTl.set(leftCircle.current, {
      scaleY: 0,
    });
    enterTl.set(rightCircle.current, {
      scaleY: 0,
    });
    enterTl.call(() => {
      dispatch(setActive(true));
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
