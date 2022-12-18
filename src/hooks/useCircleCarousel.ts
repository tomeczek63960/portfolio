import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";

export const useCircleCarousel = (): [React.RefObject<HTMLDivElement>, React.RefObject<HTMLDivElement>, React.RefObject<HTMLDivElement>, any, any] => {
  const [isCarouselInited, setisCarouselInited] = useState<any>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselPaginationRef = useRef<HTMLDivElement>(null);
  const carouselTextRef = useRef<HTMLDivElement>(null);
  const carousel = useRef<any>();
  useIsomorphicLayoutEffect(() => {
    setisCarouselInited(true);
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (!isCarouselInited) return;
    carousel.current = {
      node        : carouselRef.current,
      slides      : Array.from(carouselTextRef.current ? carouselTextRef.current.children : []),
      slidesN     : carouselTextRef.current ? carouselTextRef.current.children.length : 0,
      pagination  : carouselPaginationRef.current,
      pagTransf   : 'translate( -50%, -50% )',
      dots        : Array.from(carouselPaginationRef.current ? carouselPaginationRef.current.children : []),
      dotsN       : carouselPaginationRef.current ? carouselPaginationRef.current.children.length : 0,
      step        : -360/(carouselPaginationRef.current ? carouselPaginationRef.current.children.length : 0),
      angle       : 0,
      activeN     : 0,
      prevN       : 0,
      speed       : 800,
      autoplay    : 4500,
      autoplayId  : null,
    }
    carousel.current.pagination.style.transitionDuration = carousel.current.speed +'ms';
    carousel.current.dots.forEach(handleDotsListeners);
    if (carousel.current.autoplay) startAutoplay();
  }, [isCarouselInited]);
  const handleDotsListeners = (dot: any, index: any) => {
    dot.addEventListener('click', () => setSlide(index));
    dot.style.transform = 'rotate('+ 360 / carousel.current.dotsN * index + 'deg)';
  }
  const setSlide = function (slideN: any) {
    const tl = gsap.timeline();
    carousel.current.slides[carousel.current.activeN].classList.remove('active');
    tl.to(carousel.current.slides[carousel.current.activeN].children, {
      duration: 0.4,
      opacity: 0,
      pointerEvents: 'none',
      y: '-40%',
      stagger: 0.2
    });

    if (carousel.current.dots[carousel.current.activeN]) {
      carousel.current.dots[carousel.current.activeN].classList.remove('active');
    }

    carousel.current.prevN = carousel.current.activeN;
    carousel.current.activeN = slideN;
    if (carousel.current.activeN < 0) {
      carousel.current.activeN = carousel.current.slidesN -1;
    } else if (carousel.current.activeN >= carousel.current.slidesN) {
      carousel.current.activeN = 0;
    }

    carousel.current.slides[carousel.current.activeN].classList.toggle('active');	
    tl.to(carousel.current.slides[carousel.current.activeN].children, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      pointerEvents: 'all',
      stagger: 0.2
    });
    if (carousel.current.dots[carousel.current.activeN]) {
      carousel.current.dots[carousel.current.activeN].classList.toggle('active');
    }

    rotate();
  };
  const getAngle = (dots: any, next: any, prev: any, step: any) => {
    let inc, half = dots / 2;
    if (prev > dots) prev = dots - 1;
    if (Math.abs(inc = next - prev) <= half) return step * inc;
    if (Math.abs(inc = next - prev + dots) <= half) return step * inc;
    if (Math.abs(inc = next - prev - dots) <= half) return step * inc;
  }
  const rotate = () => {
    if (carousel.current.activeN >= carousel.current.dotsN) return;
    carousel.current.angle += getAngle(carousel.current.dotsN, carousel.current.activeN, carousel.current.prevN, carousel.current.step);
    carousel.current.pagination.style.transform = carousel.current.pagTransf +'rotate('+ carousel.current.angle +'deg)';
  };
  const startAutoplay = () => {
    carousel.current.autoplayId = setInterval(() => {
      setSlide(carousel.current.activeN + 1);
    }, carousel.current.autoplay);
  };
  const stopAutoplay = () => {
    clearInterval(carousel.current.autoplayId);
  };
  return [
    carouselRef,
    carouselPaginationRef,
    carouselTextRef,
    startAutoplay,
    stopAutoplay
  ];
}