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

interface CarouselConfig {
  slides: HTMLCollectionOf<HTMLElement> | never[];
  activeSlide: number;
  dots: HTMLCollectionOf<HTMLElement> | never[];
  angle: number;
  prevSlide: number;
  step: number;
  autoplayId: NodeJS.Timer | undefined;
}

interface AnimationObject {
  duration: number;
  opacity?: number;
  y?: number | string;
  pointerEvents?: string;
  stagger?: number;
  scale?: string;
  filter?: string;
}

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const pagination = useRef<HTMLDivElement>(null);
  const carouselTextRef = useRef<HTMLDivElement>(null);
  const slideTimeline = useRef(gsap.timeline());
  const configObject = useRef<CarouselConfig>({
    slides: [],
    activeSlide: 0,
    dots: [],
    angle: 0,
    prevSlide: 0,
    step: 0,
    autoplayId: undefined,
  });

  useIsomorphicLayoutEffect((): void => {
    const dots = pagination.current?.children as
      | HTMLCollectionOf<HTMLElement>
      | never[];
    const slides = carouselTextRef.current?.children as
      | HTMLCollectionOf<HTMLElement>
      | never[];
    configObject.current = {
      ...configObject.current,
      slides,
      dots,
      step: -360 / (isTruthy(dots) ? dots.length : 0),
    };

    Array.from(dots).forEach((dot: HTMLElement, index: number) => {
      dot.style.transform = `rotate(${(360 / dots.length) * index}deg)`;
    });
    if (isTruthy(pagination.current))
      pagination.current.style.transitionDuration = `${speed}ms`;
    if (isTruthy(autoplay) && isFalsy(configObject.current.autoplayId))
      startAutoplay();
  }, []);

  const startAutoplay = (): void => {
    configObject.current.autoplayId = setInterval(() => {
      if (isTruthy(document) && !document.hidden) {
        setSlide(configObject.current.activeSlide + 1);
      }
    }, autoplay);
  };
  const stopAutoplay = (): void => {
    clearInterval(configObject.current.autoplayId);
  };
  const getTransformAnimateObject = (type: string = "in"): AnimationObject => {
    const animationObject = {
      duration: 0.3,
      opacity: type === "in" ? 1 : 0,
      y: type === "in" ? 0 : "-40%",
      pointerEvents: type === "in" ? "all" : "none",
      stagger: 0.2,
    };
    return animationObject;
  };
  const getTransformSvgObject = (type: string = "in"): AnimationObject => {
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
      activeIndex = configObject.current.slides.length - 1;
    } else if (index >= configObject.current.slides.length) {
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
    return Array.from(configObject.current.dots).findIndex(
      (item: HTMLElement) => item === target
    );
  };

  const changeSlideAnimation = (
    index: number,
    classAction: "add" | "remove"
  ): void => {
    const slide = configObject.current.slides[index];
    const dots = configObject.current.dots[index];
    const svg = dots.querySelector("svg");
    const isEnterAnimation = classAction === "add";
    slideTimeline.current.to(
      svg,
      getTransformSvgObject(isEnterAnimation ? "in" : "out"),
      "start"
    );
    slideTimeline.current.to(
      slide.children,
      getTransformAnimateObject(isEnterAnimation ? "in" : "out")
    );
  };

  const setSlide = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent> | number
  ): void => {
    const prev = configObject.current.activeSlide;
    const index =
      typeof event === "number" ? event : findClickedElementIndex(event);
    const active = getSlideIndex(index);

    changeSlideAnimation(prev, "remove");
    changeSlideAnimation(active, "add");

    configObject.current.prevSlide = prev;
    configObject.current.activeSlide = active;

    if (pagination.current == null) return;
    configObject.current.angle += getAngle(
      configObject.current.dots.length,
      active,
      prev,
      configObject.current.step
    );
    pagination.current.style.transform = `translate(-50%, -50%) rotate(${configObject.current.angle}deg)`;
  };

  return [
    carouselRef,
    pagination,
    carouselTextRef,
    startAutoplay,
    stopAutoplay,
    setSlide,
  ];
};
