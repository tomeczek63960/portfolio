import { useEffect, useContext } from "react"
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { TransitionContext } from "src/context/TransitionContext"
import Head from "./Head"
import Header from 'src/ui/Header';
import styled from 'styled-components'

import { FormattedMessage, useIntl } from "react-intl";

const Layout = (props: any) => {
  const { setBackground }: { setBackground?: Function } = useContext(TransitionContext);
  useEffect(() => {
    setBackground && setBackground(props.background || "transparent");
  }, [props.background]);

  return (
    <>
      <Head { ...props } />
      <div className="container">
        <div className="container__left">
          <h1> <FormattedMessage id="page.home.description" /> </h1>
          <main>
            { props.children }
          </main>
        </div>
        <div className="container__right">
          <Header />
        </div>
      </div>
    </>
  )
}

export default Layout
