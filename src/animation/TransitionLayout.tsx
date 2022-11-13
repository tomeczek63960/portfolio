import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import styled from 'styled-components'
import { useRouter } from "next/router";

const LeftTransition = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 50%;
  height: 100vh;
  background: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  transform: translateY(100%);
`
const RightTransition = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 50%;
  height: 100vh;
  background: black;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
  transform: translateY(-100%);
`
const CenterCircle = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 100px;
  height: 100px;
  background: black;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10000000;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  .circle-left {
    width: 50%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000000;
    transform-origin: bottom;
    color: white;
    transform: scaleY(0);
  }
  .circle-right {
    width: 50%;
    height: 100%;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10000000;
    transform-origin: top;
    transform: scaleY(0);
  }
`

export default function TransitionLayout({ children }: {children: any}) {
  const { pathname, locale } = useRouter()
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, isInitAnimation } = useContext<any>(TransitionContext)
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const el = useRef<any>()
  const leftTransition = useRef<any>()
  const rightTransition = useRef<any>()
  const centerCircle = useRef<any>()
  const leftCircle = useRef<any>()
  const rightCircle = useRef<any>()
  const flag = useRef<any>(false)

  useIsomorphicLayoutEffect(() => {
    if (isInitAnimation) return;
    if (!shouldAnimate) {
      setDisplayChildren(children)
      return setShouldAnimate(true);
    }
    console.log(isInitAnimation, 'here mere rere')
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

    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        setDisplayChildren(children)
      } else {
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
        })
      }
    }
  }, [pathname, locale, children])

  useIsomorphicLayoutEffect(() => {
    if (!flag.current) return
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
      duration: 1,
      opacity: 1
    });
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
    enterTl.to(el.current, {
      duration: 1,
      opacity: 1
    });
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
    flag.current = false
  }, [flag.current])

  return <>
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