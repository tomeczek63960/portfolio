import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useProjectBoxAnimation = (
  isActiveProjectBox: boolean
): [RefObject<HTMLDivElement>, RefObject<HTMLDivElement>] => {
  const projectBox = useRef<HTMLDivElement>(null);
  const projectBoxShadow = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  useIsomorphicLayoutEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(projectBox.current, {
        duration: 0.3,
        x: 0,
      })
    );
    timeline.current.add(
      gsap.to(projectBoxShadow.current, {
        duration: 0.3,
        opacity: 1,
        visibility: "visible",
      }),
      "-=0.3"
    );
    return () => {
      timeline.current?.clear().kill();
    };
  }, []);

  useIsomorphicLayoutEffect((): void => {
    const html = document.querySelector("html");
    if (isActiveProjectBox) {
      html?.classList.add("no-scroll");
      timeline.current
        ?.play()
        .then(() => {
          gsap.to(projectBox.current, {
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
      timeline.current
        ?.reverse()
        .then(() => {
          if (isFalsy(projectBox.current)) return;
          projectBox.current.scrollTop = 0;
          gsap.set(projectBox.current, {
            filter: "blur(2px)",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isActiveProjectBox]);
  return [projectBox, projectBoxShadow];
};
