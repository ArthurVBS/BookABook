import React from 'react'
import ToggleTheme from '../toggle-theme'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <h2>Well, hello there!</h2>
      <ToggleTheme />
    </Container>
  )
}

export default Header
