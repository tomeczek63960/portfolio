import React, {useState, createContext} from "react"

const ScrollTriggerContext = createContext({});

const ScrollTriggerProvider = ({ children }: {children: any}) => {
  const [isActive, setActive] = useState(false);
  return (
    <ScrollTriggerContext.Provider
      value={{
        isActive,
        setActive,
      }}
    >
      {children}
    </ScrollTriggerContext.Provider>
  )
}

export { ScrollTriggerContext, ScrollTriggerProvider }
