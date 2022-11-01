import '../styles/index.scss';
import type { AppProps } from 'next/app'
// import PageTransition from 'components/PageTransition';
import React, { useMemo } from 'react';
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { TransitionProvider } from "src/context/TransitionContext";
import TransitionLayout from "src/animation/TransitionLayout"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import pl from "src/lang/pl.json";
import en from "src/lang/en.json";
import Header from 'src/ui/Header';

function MyApp({ Component, pageProps }: AppProps) {
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

  return <IntlProvider locale={shortLocale} messages={curentMessage}>
    <QueryClientProvider client={queryClient}>
      <TransitionProvider>
        <TransitionLayout>
          <Header />
          <Component {...pageProps} />
        </TransitionLayout>
      </TransitionProvider>
    </QueryClientProvider>
  </IntlProvider>
}

export default MyApp;
