import { ThemeProvider } from 'styled-components'

import theme from '../theme'

import GlobalStyle from '../components/global-style'
import Page from '../components/page'

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
