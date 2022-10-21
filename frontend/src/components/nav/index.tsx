import Link from 'next/link'
import React from 'react'

import { Container } from './styles'

const Nav: React.FC = () => {
  return (
    <Container>
      <Link href="/">Go To HomePage</Link>
      <Link href="/login">Go To LoginPage</Link>
    </Container>
  )
}

export default Nav
