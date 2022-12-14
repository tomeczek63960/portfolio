import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import {LeftTransition, RightTransition, CenterCircle, HtmlTextWrapper, HtmlText} from './style';
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export default function TransitionLayout({ children }: {children: any}) {
  const { pathname, locale } = useRouter()
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, isInitAnimation } = useContext<any>(TransitionContext)
  const { setActive } = useContext<any>(ScrollTriggerContext)
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [flagTrigger, setFlagTrigger] = useState(false);
  const el = useRef<any>()
  const leftTransition = useRef<any>()
  const rightTransition = useRef<any>()
  const centerCircle = useRef<any>()
  const leftCircle = useRef<any>()
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
  }, [pathname, locale, children])
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

    enterTl.to(htmlTextLeftWrapper.current, {
      duration: 1,
      opacity: 1
    }, 'circle-show');
    enterTl.to(htmlTextRightWrapper.current, {
      duration: 1,
      opacity: 1
    }, 'circle-show');
    enterTl.to(centerCircle.current, {
      duration: 1,
      opacity: 1
    }, '-=0.5');

    enterTl.to(leftCircle.current, {
      duration: 1,
      scaleY: 1
    }, 'circle');
    enterTl.to(rightCircle.current, {
      duration: 1,
      scaleY: 1
    }, 'circle');

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
    })
  }

  return <>
    <HtmlTextWrapper ref={htmlTextLeftWrapper} position="left">
      <HtmlText theme="light">Created With Passion</HtmlText>
    </HtmlTextWrapper>
    <HtmlTextWrapper ref={htmlTextRightWrapper} position="right">
      <HtmlText theme="dark">Created With Passion</HtmlText>
    </HtmlTextWrapper>
    <LeftTransition ref={leftTransition}></LeftTransition>
    <RightTransition ref={rightTransition}></RightTransition>
    <CenterCircle ref={centerCircle}>
      <span ref={ leftCircle } className="circle-left">T</span>
      <span ref={ rightCircle } className="circle-right">K</span>
    </CenterCircle>
    <div ref={el}>
      { displayChildren }
    </div>
  </>
}