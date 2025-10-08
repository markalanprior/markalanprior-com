import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script defer data-domain="markalanprior.com" src="https://analytics.waypointlabs.app/js/script.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

