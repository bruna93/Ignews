import { AppProps } from 'next/app'
import { Header } from '../components/Header/indext'
import { SessionProvider as NextAuthPRovider } from 'next-auth/react'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthPRovider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
    </NextAuthPRovider>
  )
}

export default MyApp
