import React from 'react'
import { Container, Icon } from './styles'

import { useTheme } from '../../contexts/theme-context'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'

const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const icon = theme.title === 'light' ? 'fas fa-moon' : 'fas fa-sun'

  const handleClick = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <Container onClick={() => handleClick()}>
      <Icon className={icon}></Icon>
    </Container>
  )
}

export default ToggleTheme
