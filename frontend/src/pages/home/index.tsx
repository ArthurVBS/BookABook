import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import { Container } from './styles'

const HomePageContent: React.FC = () => {
  const { logout } = useAuth()

  return (
    <Container>
      <h1>Home Page</h1>
      <button onClick={() => logout()}>logout</button>
    </Container>
  )
}

export default HomePageContent
