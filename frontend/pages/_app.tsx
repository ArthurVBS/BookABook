import type { AppProps } from 'next/app'
import GlobalStyles from '../src/styles/global'

import { ThemeContextProvider } from '../src/contexts/theme-context'
import { NavbarContextProvider } from '../src/contexts/navbar-context'
import { AuthContextProvider } from '../src/contexts/auth-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <NavbarContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </NavbarContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
