import '../styles/index.scss';
import type { AppProps } from 'next/app'
import Link from 'next/link'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <div>
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
  </QueryClientProvider>
}

export default MyApp
