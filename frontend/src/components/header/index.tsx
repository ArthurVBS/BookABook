import React from 'react'
import Nav from '../nav'
import ToggleTheme from '../toggle-theme'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <h2>Well, hello there!</h2>
      <Nav />
      <ToggleTheme />
    </Container>
  )
}

export default Header
