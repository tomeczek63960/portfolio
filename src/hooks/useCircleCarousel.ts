import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";

export const useCircleCarousel = (): [React.RefObject<HTMLDivElement>, React.RefObject<HTMLDivElement>, React.RefObject<HTMLDivElement>] => {
  const [customCarousel, setCustomCarousel] = useState<any>(false);
  const isInited = useRef<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselPaginationRef = useRef<HTMLDivElement>(null);
  const carouselTextRef = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    const options = {
      node: carouselRef.current,
      pagination: carouselPaginationRef.current,
      slides: carouselTextRef.current,
      speed: 800,
      autoplay: 4500,
      activeN: 0
    }
    !customCarousel && setCustomCarousel({
      node        : options.node,
      slides      : Array.from(options.slides ? options.slides.children : []),
      slidesN     : options.slides ? options.slides.children.length : 0,
      pagination  : options.pagination,
      pagTransf   : 'translate( -50%, -50% )',
      dots        : Array.from(options.pagination ? options.pagination.children : []),
      dotsN       : options.pagination ? options.pagination.children.length : 0,
      step        : -360/(options.pagination ? options.pagination.children.length : 0),
      angle       : 0,
      activeN     : options.activeN || 0,
      prevN       : options.activeN || 0,
      speed       : options.speed || 300,
      autoplay    : options.autoplay || false,
      autoplayId  : null,
    });
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (isInited.current || !customCarousel) return;
    isInited.current = true;
    customCarousel.pagination.style.transitionDuration = customCarousel.speed +'ms';
    customCarousel.dots.forEach(handleDotsListeners);
    hadnleAutoplayListeners();
  }, [customCarousel]);
  
  const handleDotsListeners = (dot: any, index: any) => {
    dot.addEventListener('click', () => setSlide(index));
    dot.style.transform = 'rotate('+ 360 / customCarousel.dotsN * index + 'deg)';
  }
  const hadnleAutoplayListeners = () => {
    if (!customCarousel.autoplay) return;
    startAutoplay();
    customCarousel.node.addEventListener('mouseenter', stopAutoplay);
    customCarousel.node.addEventListener('mouseleave', startAutoplay);
  };

  const setSlide = function (slideN: any) {
    const tl = gsap.timeline();
    customCarousel.slides[customCarousel.activeN].classList.remove('active');
    tl.to(customCarousel.slides[customCarousel.activeN].children, {
      duration: 0.4,
      opacity: 0,
      pointerEvents: 'none',
      y: '-40%',
      stagger: 0.2
    });

    if (customCarousel.dots[customCarousel.activeN]) {
      customCarousel.dots[customCarousel.activeN].classList.remove('active');
    }

    customCarousel.prevN = customCarousel.activeN;
    customCarousel.activeN = slideN;
    if (customCarousel.activeN < 0) {
      customCarousel.activeN = customCarousel.slidesN -1;
    } else if (customCarousel.activeN >= customCarousel.slidesN) {
      customCarousel.activeN = 0;
    }

    customCarousel.slides[customCarousel.activeN].classList.toggle('active');	
    tl.to(customCarousel.slides[customCarousel.activeN].children, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      pointerEvents: 'all',
      stagger: 0.2
    });
    if (customCarousel.dots[customCarousel.activeN]) {
      customCarousel.dots[customCarousel.activeN].classList.toggle('active');
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
    if (customCarousel.activeN >= customCarousel.dotsN) return;
    customCarousel.angle += getAngle(customCarousel.dotsN, customCarousel.activeN, customCarousel.prevN, customCarousel.step);
    customCarousel.pagination.style.transform = customCarousel.pagTransf +'rotate('+ customCarousel.angle +'deg)';
  };

  const startAutoplay = () => {
    customCarousel.autoplayId = setInterval(() => {
      setSlide(customCarousel.activeN + 1);
    }, customCarousel.autoplay);
  };

  const stopAutoplay = () => {
    clearInterval(customCarousel.autoplayId);
  };

  return [
    carouselRef,
    carouselPaginationRef,
    carouselTextRef
  ];
}