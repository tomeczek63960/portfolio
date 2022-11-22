import React, { useState, createContext, useCallback, useEffect } from "react"
import gsap from "gsap"

const TransitionContext = createContext({})

const TransitionProvider = ({ children }: {children: any}) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );
  const [isInitAnimation, setIsInitAnimation] = useState(true);
  const [componentsTimeline, setComponentsTimeline] = useState(() => 
    // ten timeline ma się odpalić w transitionLayout po przejściu strony (oraz w loadingAnimation przy pierwszym wczytaniu)
    gsap.timeline({ paused: true })
  );
  
  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        isInitAnimation,
        setIsInitAnimation,
        componentsTimeline,
        setComponentsTimeline
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export { TransitionContext, TransitionProvider }
