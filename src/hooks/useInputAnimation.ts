import { useRef, RefObject } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useInputAnimation = (
  input?: RefObject<HTMLInputElement>,
  type?: "success" | "error"
): [GSAPTimeline, RefObject<HTMLSpanElement>, RefObject<HTMLSpanElement>] => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));
  const inputBorder = useRef<HTMLSpanElement>(null);
  const inputBorderAfter = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isFalsy(inputBorder.current) || isFalsy(inputBorderAfter.current))
      return;
    timeline.current.call(() => {
      if (isFalsy(type) || isFalsy(input)) return;
      input.current?.classList[type === "success" ? "remove" : "add"]("error");
    });
    timeline.current.to(inputBorder.current, {
      duration: 0.5,
      width: "100%",
    });
    timeline.current.to(
      inputBorderAfter.current,
      {
        duration: 0.5,
        width: "100%",
      },
      "-=0.3"
    );
    timeline.current.to(inputBorderAfter.current, {
      duration: 0.4,
      x: "100%",
    });

    return () => {
      timeline.current?.clear().kill();
    };
  }, []);

  return [timeline.current, inputBorder, inputBorderAfter];
};
