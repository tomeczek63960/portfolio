import { useEffect, useContext } from "react"
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { TransitionContext } from "src/context/TransitionContext"
import Head from "./Head"

const Layout = (props: any) => {
  const { setBackground }: { setBackground?: Function } = useContext(TransitionContext)

  useEffect(() => {
    setBackground && setBackground(props.background || "transparent")
  }, [props.background])

  return (
    <>
      <Head {...props} />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout
