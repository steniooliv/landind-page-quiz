import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
      <title>Real Transformação</title>
    </Head>
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp
