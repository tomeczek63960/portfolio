import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useProjectBoxAnimation = (
  isActiveProjectBox: boolean
): [RefObject<HTMLDivElement>, RefObject<HTMLDivElement>] => {
  const refProjectBox = useRef<HTMLDivElement>(null);
  const refProjectBoxShadow = useRef<HTMLDivElement>(null);
  const refTimeline = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    refTimeline.current = gsap.timeline({ paused: true });
    refTimeline.current.add(
      gsap.to(refProjectBox.current, {
        duration: 0.3,
        x: 0,
      })
    );
    refTimeline.current.add(
      gsap.to(refProjectBoxShadow.current, {
        duration: 0.3,
        opacity: 1,
        visibility: "visible",
      }),
      "-=0.3"
    );
    return () => {
      refTimeline.current?.clear().kill();
    };
  }, []);

  useIsomorphicLayoutEffect((): void => {
    const html = document.querySelector("html");
    if (isActiveProjectBox) {
      html?.classList.add("no-scroll");
      refTimeline.current
        ?.play()
        .then(() => {
          gsap.to(refProjectBox.current, {
            duration: 0.3,
            filter: "blur(0px)",
            delay: 0.2,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      html?.classList.remove("no-scroll");
      refTimeline.current
        ?.reverse()
        .then(() => {
          if (isFalsy(refProjectBox.current)) return;
          refProjectBox.current.scrollTop = 0;
          gsap.set(refProjectBox.current, {
            filter: "blur(2px)",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isActiveProjectBox]);
  return [refProjectBox, refProjectBoxShadow];
};
