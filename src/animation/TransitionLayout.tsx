import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";

export default function TransitionLayout({ children }: {children: any}) {
  // const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, background } = useContext<any>(TransitionContext)
  const el = useRef<any>()

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    })
  }, [background])

  return <div ref={el}>{displayChildren}</div>
}