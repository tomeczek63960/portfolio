import { useRef, RefObject, MouseEventHandler, MouseEvent } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { simpleSplitText } from "src/helpers/simpleSplitText";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import { PropsTimeline, ITimelineObject } from "./types";

const createTimeline = ({
  target,
  color,
  hoverColor,
}: PropsTimeline): GSAPTimeline => {
  const tl = gsap.timeline({ paused: true });
  tl.add(
    gsap.to(target, {
      delay: 0.1,
      duration: 0,
      scaleY: 1,
      scaleX: 1,
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.3,
      scaleY: 1.25,
      scaleX: 0.75,
    })
  );
  isTruthy(hoverColor) &&
    tl.add(
      gsap.to(target, {
        duration: 0.2,
        color: hoverColor,
      }),
      "-=0.3"
    );
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 0.75,
      scaleX: 1.25,
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 1.15,
      scaleX: 0.85,
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.15,
      scaleY: 0.95,
      scaleX: 1.05,
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 1.05,
      scaleX: 0.95,
    })
  );
  isTruthy(hoverColor) &&
    tl.add(
      gsap.to(target, {
        duration: 0.3,
        color,
      }),
      "-=0.25"
    );
  tl.add(
    gsap.to(target, {
      duration: 0.25,
      scaleY: 1,
      scaleX: 1,
    })
  );
  return tl;
};

export const useAnimatedChars = (
  props: any
): [RefObject<HTMLHeadingElement>, MouseEventHandler<HTMLHeadingElement>] => {
  const heading = useRef<HTMLHeadingElement>(null);
  const tlEvents = useRef<ITimelineObject[]>([]);
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);
  const handleAnimation = (
    target: HTMLHeadingElement,
    animationIndex?: string
  ): void => {
    const tlObject = tlEvents.current.find(
      (tlElement) => tlElement.animationIndex === animationIndex
    );

    tlObject?.tl
      .play()
      .then(() => {
        target.setAttribute("animate", "true");
        tlObject.tl.seek(0).pause();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAnimationIndex = (target: HTMLHeadingElement): string => {
    let animationIndex = target.dataset.animationIndex;

    if (isFalsy(animationIndex)) {
      animationIndex = (Math.random() * 10000000).toString();
      target.setAttribute("data-animation-index", animationIndex);
      const tl = createTimeline({
        target,
        color: props.color,
        hoverColor: props.hoverColor,
      });
      tlEvents.current.push({
        animationIndex,
        tl,
      });
    }
    return animationIndex;
  };
  const animateChars = (event: MouseEvent<HTMLHeadingElement>): void => {
    const target = event.target as HTMLHeadingElement;
    if (isFalsy(target.dataset.animate)) return;
    target.removeAttribute("animate");
    const animationIndex = getAnimationIndex(target);
    handleAnimation(target, animationIndex);
  };
  useIsomorphicLayoutEffect(() => {
    if (heading.current == null) return;
    simpleSplitText(heading.current);
    return () => {
      tlEvents.current.forEach((tlObject) => {
        tlObject.tl?.kill();
        tlObject.tl?.clear();
      });
    };
  }, [heading.current]);
  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      if (!isActive || heading.current == null) return;
      const letters = heading.current.querySelectorAll(".splitted-text");
      gsap.to(heading.current, {
        duration: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: heading.current,
        },
      });
      gsap.to(letters, {
        duration: 0.1,
        stagger: 0.05,
        scale: 1,
        scrollTrigger: {
          trigger: heading.current,
        },
      });
    }, 0);
  }, [isActive]);

  return [heading, animateChars];
};
