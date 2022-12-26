import { useRef } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useSelector } from "react-redux";
import type { IRootState } from "src/store";
import { isFalsy } from "src/helpers/checkFalsyType";

export const useTransformAnimation = (): [
  React.RefObject<HTMLHeadingElement>
] => {
  const paragraph = useRef<HTMLHeadingElement>(null);
  const { isActive } = useSelector((state: IRootState) => state.scrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (!isActive || isFalsy(paragraph.current)) return;
    gsap.to(paragraph.current, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: paragraph.current,
        start: () => `top ${window.innerHeight * 0.75}`,
        end: () => `top ${window.innerHeight * 0.7}`,
      },
    });
  }, [isActive]);

  return [paragraph];
};
