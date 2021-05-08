import { ThemeProvider } from 'styled-components'

import Router from 'next/router'
import NProgress from 'nprogress'
import '../components/styles/nprogress.css'

import theme from '../theme'

import GlobalStyle from '../components/global-style'
import Page from '../components/page'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </>
  )
}
