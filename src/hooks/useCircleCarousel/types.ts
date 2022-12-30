export interface ICarouselConfig {
  slides: HTMLCollectionOf<HTMLElement> | never[];
  activeSlide: number;
  dots: HTMLCollectionOf<HTMLElement> | never[];
  angle: number;
  prevSlide: number;
  step: number;
  autoplayId: NodeJS.Timer | undefined;
}

export interface IAnimationObject {
  duration: number;
  opacity?: number;
  y?: number | string;
  pointerEvents?: string;
  stagger?: number;
  scale?: string;
  filter?: string;
}
