import React from "react";

export const useCircleCarousel = () => {
  const customCarousel: any = {}
  const init = function (options: any) {
    customCarousel.node        = options.node;
    customCarousel.node.slider = customCarousel;
    customCarousel.slides      = Array.from(options.slides.children);
    customCarousel.slidesN     = options.slides.children.length;
    customCarousel.pagination  = options.pagination;
    customCarousel.pagTransf   = 'translate( -50%, -50% )';
    customCarousel.dots        = Array.from(options.pagination.children);
    customCarousel.dotsN       = customCarousel.dots.length;
    customCarousel.step        = -360/customCarousel.dotsN;
    customCarousel.angle       = 0;
    customCarousel.activeN     = options.activeN || 0;
    customCarousel.prevN       = customCarousel.activeN;
    customCarousel.speed       = options.speed || 300;
    customCarousel.autoplay    = options.autoplay || false;
    customCarousel.autoplayId  = null;

    setSlide(customCarousel.activeN);
    arrangeDots();
    customCarousel.pagination.style.transitionDuration = customCarousel.speed +'ms';
    if (customCarousel.autoplay) startAutoplay();

    addListeners();
  }

  const addListeners = function () {
    customCarousel.dots.forEach((dot: any, index: any) => {
      dot.addEventListener( 'click', () => {
        setSlide(index);
      });
    });

    if (customCarousel.autoplay) {
      customCarousel.node.addEventListener( 'mouseenter', stopAutoplay);
      customCarousel.node.addEventListener( 'mouseleave', startAutoplay());
    }
  };

  const setSlide = function (slideN: any) {
    customCarousel.slides[customCarousel.activeN].classList.remove('active');
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

  return [true, init];
}