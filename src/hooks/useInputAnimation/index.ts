import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useInputAnimation = (
  input?: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  type?: "success" | "error"
): [GSAPTimeline, RefObject<HTMLSpanElement>, RefObject<HTMLSpanElement>] => {
  const refTimeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));
  const refInputBorder = useRef<HTMLSpanElement>(null);
  const refInputBorderAfter = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isFalsy(refInputBorder.current) || isFalsy(refInputBorderAfter.current))
      return;
    refTimeline.current.call(() => {
      if (isFalsy(type) || isFalsy(input)) return;
      input.current?.classList[type === "success" ? "remove" : "add"]("error");
    });
    refTimeline.current.to(refInputBorder.current, {
      duration: 0.5,
      width: "100%",
    });
    refTimeline.current.to(
      refInputBorderAfter.current,
      {
        duration: 0.5,
        width: "100%",
      },
      "-=0.3"
    );
    refTimeline.current.to(refInputBorderAfter.current, {
      duration: 0.4,
      x: "100%",
    });

    return () => {
      refTimeline.current?.clear().kill();
    };
  }, []);

  return [refTimeline.current, refInputBorder, refInputBorderAfter];
};
