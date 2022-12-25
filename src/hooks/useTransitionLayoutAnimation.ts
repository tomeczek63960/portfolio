import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export const useTransitionLayoutAnimation = (children: any): any => {
  const { pathname, locale } = useRouter()
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, isInitAnimation } = useContext<any>(TransitionContext)
  const { setActive } = useContext<any>(ScrollTriggerContext)
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const el = useRef<any>()
  const leftTransition = useRef<any>()
  const rightTransition = useRef<any>()
  const centerCircle = useRef<any>()
  const leftCircleWrapper = useRef<any>()
  const leftCircle = useRef<any>()
  const rightCircleWrapper = useRef<any>()
  const rightCircle = useRef<any>()
  const flag = useRef<any>(false)
  const htmlTextLeftWrapper = useRef<any>();
  const htmlTextRightWrapper = useRef<any>();
  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    if (!shouldAnimate) {
      setDisplayChildren(children)
      return setShouldAnimate(true);
    }
    timeline.add(
      gsap.to(el.current, {
        duration: 1,
        opacity: 0,
        pointerEvents: 'none'
      }),
      0
    )
    timeline.add(
      gsap.to(leftTransition.current, {
        duration: 1,
        y: '0%'
      }),
      0
    )
    timeline.add(
      gsap.to(rightTransition.current, {
        duration: 1,
        y: '0%'
      }),
      0
    )
  
    setActive(false);
    timeline.play().then(() => {
      timeline.seek(0).pause().clear()
      gsap.set(leftTransition.current, {
        y: '0%'
      });
      gsap.set(rightTransition.current, {
        y: '0%'
      });
      setDisplayChildren(children)
      flag.current = true
      pageTransition();
    })
  }, [pathname, locale, children]);
  const pageTransition = () => {
    if (!flag.current) return
    flag.current = false
    const enterTl = gsap.timeline({ paused: false })

    enterTl.set(leftTransition.current, {
      y: '0%'
    });
    enterTl.set(rightTransition.current, {
      y: '0%'
    });
    enterTl.set(centerCircle.current, {
      opacity: 0
    });
    enterTl.set(el.current, {
      opacity: 0,
      pointerEvents: 'none'
    });
    
    enterTl.to(centerCircle.current, {
      duration: 0.7,
      opacity: 1
    }, 'circle-show');
    enterTl.to(htmlTextLeftWrapper.current, {
      duration: 0.7,
      opacity: 1
    }, 'circle-show');
    enterTl.to(htmlTextRightWrapper.current, {
      duration: 0.7,
      opacity: 1
    }, 'circle-show');

    enterTl.to(leftCircle.current, {
      duration: 1,
      scaleY: 1
    }, 'circle');
    enterTl.to(rightCircle.current, {
      duration: 1,
      scaleY: 1
    }, 'circle');
    const leftLetter = leftCircle.current.querySelector('svg path');
    const rightLetter = rightCircle.current.querySelector('svg path');

    enterTl.to(leftLetter, {
      duration: 1.5,
      strokeDashoffset: 0,
    }, 'circle-letter');
    enterTl.to(rightLetter, {
      duration: 1.5,
      strokeDashoffset: 0,
    }, 'circle-letter');

    enterTl.to(leftLetter, {
      duration: 1.5,
      delay: 1,
      fill: '#fff',
    }, 'circle-letter');
    enterTl.to(rightLetter, {
      duration: 1.5,
      delay: 1.5,
      fill: '#000',
    }, 'circle-letter');
    enterTl.to(leftTransition.current, {
      duration: 1,
      y: '-100%'
    }, 'start');
    enterTl.to(rightTransition.current, {
      duration: 1,
      y: '100%'
    }, 'start');
    enterTl.to(htmlTextLeftWrapper.current, {
      duration: 0.3,
      opacity: 0
    }, 'animation-end');
    enterTl.to(htmlTextRightWrapper.current, {
      duration: 0.3,
      opacity: 0
    }, 'animation-end');
    enterTl.to(el.current, {
      duration: 1,
      opacity: 1
    }, 'animation-end');
    enterTl.to(centerCircle.current, {
      duration: 0.3,
      opacity: 0
    });

    enterTl.set(leftLetter, {
      strokeDashoffset: 250,
      fill: 'none',
    });
    enterTl.set(rightLetter, {
      strokeDashoffset: 250,
      fill: 'none',
    });
    enterTl.set(centerCircle.current, {
      opacity: 0
    });
    enterTl.set(el.current, {
      pointerEvents: 'all'
    });
    enterTl.set(leftTransition.current, {
      y: '100%'
    });
    enterTl.set(rightTransition.current, {
      y: '-100%'
    });
    enterTl.set(centerCircle.current, {
      opacity: 0
    });
    enterTl.set(leftCircle.current, {
      scaleY: 0
    });
    enterTl.set(rightCircle.current, {
      scaleY: 0
    });
    enterTl.call(() => {
      setActive(true)
    });
  }

  return [
    displayChildren,
    el,
    leftTransition,
    rightTransition,
    centerCircle,
    leftCircleWrapper,
    leftCircle,
    rightCircleWrapper,
    rightCircle,
    htmlTextLeftWrapper,
    htmlTextRightWrapper,
  ];
}