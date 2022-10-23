import Link from 'next/link'
import React from 'react'

import { Container } from './styles'
import { useNavbar } from '../../contexts/navbar-context'

const Navbar: React.FC = () => {
  const { show } = useNavbar()

  return (
    <Container show={show}>
      <Link href="/">home</Link>
      <Link href="/login">login</Link>
      <Link href="/my-books">my books</Link>
    </Container>
  )
}

export default Navbar
