import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { TransitionProvider } from "src/context/TransitionContext";
import TransitionLayout from "src/animation/TransitionLayout"
import styled from 'styled-components'
import { useRouter } from "next/router";

const Html = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: white;
  font-family: Times;
`;
const HtmlBefore = styled.span`
  width: 50px;
  height: 50px;    
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  border-radius: 50%;
  display: block;
  /* animation: loadPage 28s forwards; */
`;
const HtmlAfter = styled.span`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 200px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  /* animation: loadPageContentAnim 4s 3.7s forwards; */
  opacity: 0;
  color: white;
  font-size: 25px;
  font-weight: 700;
`;

const Body = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  opacity: 0;
  /* animation: loadPageContent 0.3s 7.5s ease-in-out forwards; */
`
const BodyBefore = styled.span`
  display: block
  width: 50%;
  height: 0;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  /* animation: loadHeight 1s 8.5s forwards; */
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  @media screen and (min-width: 768px) {
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  }
`;

export default function LoadingAnimation({ children }: {children: any}) {
  const { pathname, locale } = useRouter()
  const [isInitAnimation, setInitAnimation] = useState(true);
  const [displayChildren, setDisplayChildren] = useState();
  // const { timeline, background } = useContext<any>(TransitionContext)
  // const { setFirstAnimation } = useContext<any>(TransitionContext)
  const el = useRef<any>()
  const flag = useRef<any>(false)
  const timeline = gsap.timeline({ paused: true });
  const htmlBefore = useRef<any>(false)
  const htmlAfter = useRef<any>(false)

  useIsomorphicLayoutEffect(() => {
    if (flag.current) return;
    // timeline.add(
    //   gsap.set(el.current, {
    //     opacity: 0,
    //     pointerEvents: 'none'
    //   })
    // )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }), 'start'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }), '-=0.35'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start2'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40
      }), 'start2'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57
      }), '-=0.35'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back2'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back2'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        scale: 3,
      })
    )
    timeline.add(
      gsap.to(htmlAfter.current, {
        duration: 0.7,
        opacity: 1
      })
    )
    timeline.add(
      gsap.to(htmlBefore.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 100,
      })
    )
    timeline.add(
      gsap.to(htmlAfter.current, {
        duration: 0.35,
        opacity: 0
      }), '-=0.7'
    )
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
          // setDisplayChildren(children)
      } else {
        setDisplayChildren(children)
        timeline.play().then(() => {
          timeline.pause();
          setInitAnimation(false);
          // timeline.seek(0).pause().clear()
          // setDisplayChildren(children)
          // tutaj zamiast tego wykonania animacji powinna iść jakaś globalna ze stora na którą tylko damy .play()
          // timeline.add(
          //   gsap.to(el.current, {
          //     duration: 0.4,
          //     opacity: 1,
          //     pointerEvents: 'all'
          //   })
          // )
          // timeline.play()
        })
      }
    }
    flag.current = true;
  }, [])

  return <>
    <Html>
      <HtmlBefore ref={ htmlBefore } className="html--before"></HtmlBefore>
      <HtmlAfter ref={ htmlAfter } className="html--after">TK</HtmlAfter>
    </Html>

    {/* <Body className="body">
      <BodyBefore className="body--before"></BodyBefore>
    </Body> */}
    <TransitionProvider isInitAnimation={ isInitAnimation }>
      <TransitionLayout>
        <div ref={el}>
          { displayChildren }
          {/* { flag ? children : displayChildren } */}
        </div>
      </TransitionLayout>
    </TransitionProvider>
  </>
}