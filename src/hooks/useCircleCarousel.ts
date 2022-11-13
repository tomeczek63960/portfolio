import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface carouselOptions {
  node: any,
  pagination: any,
  slides: any,
  speed: any,
  autoplay: any,
  activeN?: any
}

export const useCircleCarousel = (): [boolean, Function] => {
  const [customCarousel, setCustomCarousel] = useState<any>(false);
  const isInited = useRef<boolean>(false);
  const init = async (options: carouselOptions) => {
    setCustomCarousel({
      node        : options.node,
      slides      : Array.from(options.slides.children),
      slidesN     : options.slides.children.length,
      pagination  : options.pagination,
      pagTransf   : 'translate( -50%, -50% )',
      dots        : Array.from(options.pagination.children),
      dotsN       : options.pagination.children.length,
      step        : -360/options.pagination.children.length,
      angle       : 0,
      activeN     : options.activeN || 0,
      prevN       : options.activeN || 0,
      speed       : options.speed || 300,
      autoplay    : options.autoplay || false,
      autoplayId  : null,
    });
  }
  useEffect(() => {
    if (!isInited.current) {
      if (customCarousel) {
        isInited.current = true;
        setSlide(customCarousel.activeN);
        arrangeDots();
        customCarousel.pagination.style.transitionDuration = customCarousel.speed +'ms';
        if (customCarousel.autoplay) startAutoplay();
        addListeners();
      }
    }
  }, [customCarousel]);

  const addListeners = function () {
    customCarousel.dots.forEach((dot: any, index: any) => {
      dot.addEventListener( 'click', () => {
        setSlide(index);
      });
    });

    if (customCarousel.autoplay) {
      customCarousel.node.addEventListener( 'mouseenter', stopAutoplay);
      customCarousel.node.addEventListener( 'mouseleave', startAutoplay);
    }
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

  const rotate = () => {
    const getAngle = (dots: any, next: any, prev: any, step: any) => {
      let inc, half = dots/2;
      if (prev > dots) prev = dots - 1;
      if (Math.abs(inc = next - prev) <= half) return step * inc;
      if (Math.abs(inc = next - prev + dots) <= half) return step * inc;
      if (Math.abs(inc = next - prev - dots) <= half) return step * inc;
    }
    if (customCarousel.activeN < customCarousel.dotsN) {
      customCarousel.angle += getAngle(customCarousel.dotsN, customCarousel.activeN, customCarousel.prevN, customCarousel.step);
      customCarousel.pagination.style.transform = customCarousel.pagTransf +'rotate('+ customCarousel.angle +'deg)';
    }
  };

  const startAutoplay = () => {
    customCarousel.autoplayId = setInterval(() => {
      setSlide(customCarousel.activeN + 1);
    }, customCarousel.autoplay);
  };

  const stopAutoplay = () => {
    clearInterval(customCarousel.autoplayId);
  };

  const arrangeDots = function () {
    customCarousel.dots.forEach((dot: any, index: any) => {
      dot.style.transform = 'rotate('+ 360 / customCarousel.dotsN * index + 'deg)';
    });
  };

  return [customCarousel, init];
}