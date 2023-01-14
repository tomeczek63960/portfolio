import type { AppProps } from "next/app";
import React, { ReactNode, useMemo } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LoadingAnimation from "src/animation/LoadingAnimation";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { Style } from "src/styled/index";

import pl from "src/lang/pl.json";
import en from "src/lang/en.json";
import TransitionLayout from "src/animation/TransitionLayout";

import { Provider } from "react-redux";
import store from "src/store/index";
import { isTruthy } from "src/helpers/checkFalsyType";

const addSystemPadding = (): void => {
  const html = document.querySelector("html");
  if (!navigator.userAgent.includes("Mac OS X")) {
    html?.classList.add("body-padding");
  } else {
    html?.classList.add("body-padding-thin");
  }
};
const App = ({ Component, pageProps }: AppProps): ReactNode => {
  const { locale } = useRouter();
  const [shortLocale] = isTruthy(locale) ? locale.split("-") : ["en"];

  const curentMessage = useMemo(() => {
    switch (shortLocale) {
      case "pl":
        return pl;
      case "en":
        return en;
      default:
        return en;
    }
  }, [locale]);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(TextPlugin);
    }
    addSystemPadding();
    document.addEventListener("resize", addSystemPadding);
    return () => {
      document.removeEventListener("resize", addSystemPadding);
    };
  }, []);
  return (
    <>
      <Provider store={store}>
        <IntlProvider locale={shortLocale} messages={curentMessage}>
          <Style />
          <LoadingAnimation>
            <TransitionLayout>
              <Component {...pageProps} />
            </TransitionLayout>
          </LoadingAnimation>
        </IntlProvider>
      </Provider>
    </>
  );
};

export default App;
