import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'

import dark from '../src/styles/theme/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
