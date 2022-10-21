import type { AppProps } from 'next/app'

import { ThemeContextProvider } from '../src/contexts/theme-context'
import GlobalStyles from '../src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
