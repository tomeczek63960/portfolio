import { useEffect, useContext } from "react"
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { TransitionContext } from "src/context/TransitionContext"
import Head from "./Head"

import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const Layout = (props: any) => {
  const { setBackground }: { setBackground?: Function } = useContext(TransitionContext);
  const { locales=[] } = useRouter();
  const intl = useIntl();
  useEffect(() => {
    setBackground && setBackground(props.background || "transparent");
  }, [props.background]);

  return (
    <>
      <Head { ...props } />
      <h1> <FormattedMessage id="page.home.description" /> </h1>
      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={ locale }>
              { locale }
            </Link>
          ))}
        </div>
      </header>
      <main>
        { props.children }
      </main>
    </>
  )
}

export default Layout
