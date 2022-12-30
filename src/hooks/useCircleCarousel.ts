import {
  useRef,
  RefObject,
  MouseEventHandler,
  MouseEvent as ReactMouseEvent,
} from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";

const getAngle = (
  dots: number,
  next: number,
  prev: number,
  step: number
): number => {
  const half = dots / 2;
  if (prev > dots) prev = dots - 1;
  let inc;

  if (Math.abs((inc = next - prev)) <= half) return step * inc;
  if (Math.abs((inc = next - prev + dots)) <= half) return step * inc;
  if (Math.abs((inc = next - prev - dots)) <= half) return step * inc;
  return step * inc;
};

interface ICarouselConfig {
  slides: HTMLCollectionOf<HTMLElement> | never[];
  activeSlide: number;
  dots: HTMLCollectionOf<HTMLElement> | never[];
  angle: number;
  prevSlide: number;
  step: number;
  autoplayId: NodeJS.Timer | undefined;
}

interface IAnimationObject {
  duration: number;
  opacity?: number;
  y?: number | string;
  pointerEvents?: string;
  stagger?: number;
  scale?: string;
  filter?: string;
}
// TODO: fix multiple slide click text animation delay
export const useCircleCarousel = (
  speed: number = 800,
  autoplay: number = 4500
): [
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
  RefObject<HTMLDivElement>,
  MouseEventHandler<HTMLDivElement>,
  MouseEventHandler<HTMLDivElement>,
  MouseEventHandler<HTMLDivElement>
] => {
  const refCarousel = useRef<HTMLDivElement>(null);
  const refPagination = useRef<HTMLDivElement>(null);
  const refCarouselText = useRef<HTMLDivElement>(null);
  const refTimelineSlide = useRef<GSAPTimeline>();
  const refConfig = useRef<ICarouselConfig>({
    slides: [],
    activeSlide: 0,
    dots: [],
    angle: 0,
    prevSlide: 0,
    step: 0,
    autoplayId: undefined,
  });

  useIsomorphicLayoutEffect(() => {
    refTimelineSlide.current = gsap.timeline();
    const dots = refPagination.current?.children as
      | HTMLCollectionOf<HTMLElement>
      | never[];
    const slides = refCarouselText.current?.children as
      | HTMLCollectionOf<HTMLElement>
      | never[];
    refConfig.current = {
      ...refConfig.current,
      slides,
      dots,
      step: -360 / (isTruthy(dots) ? dots.length : 0),
    };

    Array.from(dots).forEach((dot: HTMLElement, index: number) => {
      dot.style.transform = `rotate(${(360 / dots.length) * index}deg)`;
    });
    if (isTruthy(refPagination.current))
      refPagination.current.style.transitionDuration = `${speed}ms`;
    if (isTruthy(autoplay) && isFalsy(refConfig.current.autoplayId))
      startAutoplay();

    return () => {
      refTimelineSlide.current?.clear().kill();
    };
  }, []);

  const startAutoplay = (): void => {
    refConfig.current.autoplayId = setInterval(() => {
      if (isTruthy(document) && !document.hidden) {
        setSlide(refConfig.current.activeSlide + 1);
      }
    }, autoplay);
  };
  const stopAutoplay = (): void => {
    clearInterval(refConfig.current.autoplayId);
  };
  const getTransformAnimateObject = (type: string = "in"): IAnimationObject => {
    const animationObject = {
      duration: 0.3,
      opacity: type === "in" ? 1 : 0,
      y: type === "in" ? 0 : "-40%",
      pointerEvents: type === "in" ? "all" : "none",
      stagger: 0.2,
    };
    return animationObject;
  };
  const getTransformSvgObject = (type: string = "in"): IAnimationObject => {
    const animationObject = {
      duration: 0.5,
      scale: type === "out" ? "1" : "1.5",
      filter: type === "out" ? "grayscale(100%)" : "grayscale(0%)",
    };

    return animationObject;
  };

  const getSlideIndex = (index: number): number => {
    let activeIndex = index;
    if (index < 0) {
      activeIndex = refConfig.current.slides.length - 1;
    } else if (index >= refConfig.current.slides.length) {
      activeIndex = 0;
    }
    return activeIndex;
  };

  const findClickedElementIndex = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    let target = event.target as HTMLElement;
    while (isFalsy(target.dataset.carouselItem)) {
      if (target.parentElement == null) break;
      target = target.parentElement;
    }
    return Array.from(refConfig.current.dots).findIndex(
      (item: HTMLElement) => item === target
    );
  };

  const changeSlideAnimation = (
    index: number,
    classAction: "add" | "remove"
  ): void => {
    const slide = refConfig.current.slides[index];
    const dots = refConfig.current.dots[index];
    const svg = dots.querySelector("svg");
    const isEnterAnimation = classAction === "add";
    refTimelineSlide.current?.to(
      svg,
      getTransformSvgObject(isEnterAnimation ? "in" : "out"),
      "start"
    );
    refTimelineSlide.current?.to(
      slide.children,
      getTransformAnimateObject(isEnterAnimation ? "in" : "out")
    );
  };

  const setSlide = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent> | number
  ): void => {
    const prev = refConfig.current.activeSlide;
    const index =
      typeof event === "number" ? event : findClickedElementIndex(event);
    const active = getSlideIndex(index);

    changeSlideAnimation(prev, "remove");
    changeSlideAnimation(active, "add");

    refConfig.current.prevSlide = prev;
    refConfig.current.activeSlide = active;

    if (refPagination.current == null) return;
    refConfig.current.angle += getAngle(
      refConfig.current.dots.length,
      active,
      prev,
      refConfig.current.step
    );
    refPagination.current.style.transform = `translate(-50%, -50%) rotate(${refConfig.current.angle}deg)`;
  };

  return [
    refCarousel,
    refPagination,
    refCarouselText,
    startAutoplay,
    stopAutoplay,
    setSlide,
  ];
};
