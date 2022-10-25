import '../styles/index.scss';
import type { AppProps } from 'next/app'
import Link from 'next/link'
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
        <div className="page">
          <Link href="/" >Home</Link>
          <br/>
          <Link href="/contact" >Kontakt</Link>
          <br/>
          <Link href="/case-studies" >Case studies</Link>
          <br/>
          <Link href="/case-studies/1" >Case study</Link>
          <br/>
          <Link href="/show-case" >Show case</Link>
          <br/>
          <Component {...pageProps} />
        </div>
        </TransitionLayout>
      </TransitionProvider>
    </QueryClientProvider>
  </IntlProvider>
}

export default MyApp;
