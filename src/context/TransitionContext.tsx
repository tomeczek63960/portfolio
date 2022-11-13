import React, { useState, createContext, useCallback, useEffect } from "react"
import gsap from "gsap"

const TransitionContext = createContext({})

const TransitionProvider = ({ children, isInitAnimation }: {children: any, isInitAnimation: boolean}) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  )
  useEffect(() => {
    console.log('here', isInitAnimation)
  }, [])
  
  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        isInitAnimation
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }
