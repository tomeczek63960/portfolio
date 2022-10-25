import '../styles/index.scss';
import type { AppProps } from 'next/app'
import Link from 'next/link'
// import PageTransition from 'components/PageTransition';
import { useRouter } from "next/router";

import { TransitionProvider } from "src/context/TransitionContext";
import TransitionLayout from "src/animation/TransitionLayout"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
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
}

export default MyApp;
