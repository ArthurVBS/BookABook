import React from 'react'
import { Container, Image } from './styles'

import Form from './form'

const LoginPageContent: React.FC = () => {
  return (
    <Container>
      <Form />
      <Image src="/undraw/login.svg" />
    </Container>
  )
}

export default LoginPageContent
