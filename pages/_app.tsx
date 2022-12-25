import '../styles/index.scss';
import type {AppProps} from 'next/app'
import React, {useMemo} from 'react';
import {useRouter} from "next/router";
import {IntlProvider} from "react-intl";
import {TextPlugin} from "gsap/dist/TextPlugin";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import LoadingAnimation from "src/animation/LoadingAnimation"
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {gsap} from 'gsap';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import pl from "src/lang/pl.json";
import en from "src/lang/en.json";
import TransitionLayout from 'src/animation/TransitionLayout';

import {Provider} from "react-redux";
import store from "src/store/index";

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [ shortLocale ] = locale ? locale.split("-") : ["en"];
  const queryClient = new QueryClient();

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
    const html = document.querySelector('html');
    if (navigator.userAgent.indexOf('Mac OS X') == -1) {
      html?.classList.add('body-padding');
    } else {
      html?.classList.add('body-padding-thin');
    }
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(TextPlugin);
    }
  })

  return <Provider store={store}>
    <IntlProvider locale={shortLocale} messages={curentMessage}>
      <QueryClientProvider client={queryClient}>
          <LoadingAnimation>
            <TransitionLayout>
              <Component {...pageProps} />
            </TransitionLayout>
          </LoadingAnimation>
      </QueryClientProvider>
    </IntlProvider>
  </Provider>
}

export default App;
