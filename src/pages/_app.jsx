import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import NProgress from 'nprogress'
import '../components/styles/nprogress.css'

import theme from '../theme'

import GlobalStyles from '../components/styles/global-styles'
import Page from '../components/page'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const client = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    const progressStart = () => NProgress.start()
    const progressDone = () => NProgress.done()

    router.events.on('routeChangeStart', progressStart)
    router.events.on('routeChangeComplete', progressDone)
    router.events.on('routeChangeError', progressDone)

    return () => {
      router.events.off('routeChangeStart', progressStart)
      router.events.off('routeChangeComplete', progressDone)
      router.events.off('routeChangeError', progressDone)
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
