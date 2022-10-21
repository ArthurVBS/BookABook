import { createContext, ReactNode, useContext, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from '../styles/theme/dark'

type themeContextType = {
  theme: DefaultTheme
  setTheme: (newState: DefaultTheme) => void
}

type themeContextProps = {
  children: ReactNode
}

const initialValue = {
  theme: dark,
  setTheme: () => {},
}

const ThemeContext = createContext<themeContextType>(initialValue)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }: themeContextProps) => {
  const [theme, setTheme] = useState(initialValue.theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
