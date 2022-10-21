import type { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/global'

import { ThemeContextProvider } from '../src/contexts/theme-context'
import { NavbarContextProvider } from '../src/contexts/navbar-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <NavbarContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </NavbarContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
