import {gsap} from "gsap";
import {TransitionContext} from "src/context/TransitionContext";
import {useState, useContext, useRef} from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {useRouter} from "next/router";
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

// TODO: update context types;
// TODO: update timelines to redux (redux toolkit);
export const useTransitionLayoutAnimation = (children: any): any => {
  const {pathname, locale} = useRouter();
  const [displayChildren, setDisplayChildren] = useState(children)
  const {timeline, isInitAnimation} = useContext<any>(TransitionContext)
  const {setActive} = useContext<any>(ScrollTriggerContext)
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  const leftTransition = useRef<HTMLDivElement>(null);
  const rightTransition = useRef<HTMLDivElement>(null);
  const centerCircle = useRef<HTMLDivElement>(null);
  const leftCircleWrapper = useRef<HTMLSpanElement>(null);
  const leftCircle = useRef<HTMLSpanElement>(null);
  const rightCircleWrapper = useRef<HTMLSpanElement>(null);
  const rightCircle = useRef<HTMLSpanElement>(null);
  const flag = useRef<boolean>(false);
  const htmlTextLeftWrapper = useRef<HTMLDivElement>(null);
  const htmlTextRightWrapper = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    if (!shouldAnimate) {
      setDisplayChildren(children);
      return setShouldAnimate(true);
    }
    timeline.add(
      gsap.to(content.current, {
        duration: 1,
        opacity: 0,
        pointerEvents: 'none'
      }),
      0
    );
    timeline.add(
      gsap.to(leftTransition.current, {
        duration: 1,
        y: '0%'
      }),
      0
    );
    timeline.add(
      gsap.to(rightTransition.current, {
        duration: 1,
        y: '0%'
      }),
      0
    );

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
      flag.current = true;
      pageTransition();
    })
  }, [pathname, locale, children]);
  const pageTransition = () => {
    if (!flag.current) return;
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
    enterTl.set(content.current, {
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
    const leftLetter = leftCircle.current?.querySelector('svg path') || null;
    const rightLetter = rightCircle.current?.querySelector('svg path') || null;

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
    enterTl.to(content.current, {
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
    enterTl.set(content.current, {
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
    content,
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