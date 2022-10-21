import React from 'react'
import { Container, LogoTitle } from './styles'

import ToggleTheme from '../toggle-theme'
import ToggleNavbar from '../toggle-navbar'

const Header: React.FC = () => {
  return (
    <Container>
      <ToggleNavbar />
      <LogoTitle>Book - a - Book</LogoTitle>
      <ToggleTheme />
    </Container>
  )
}

export default Header
