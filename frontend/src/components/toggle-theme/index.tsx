import React from 'react'
import { Container } from './styles'

import { useTheme } from '../../contexts/theme-context'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'

const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return <Container onClick={() => handleClick()}>Toggle Theme</Container>
}

export default ToggleTheme
