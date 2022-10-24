import React from 'react'
import { Container, Image } from './styles'

import Form from './form'

const SignUpPageContent: React.FC = () => {
  return (
    <Container>
      <Form />
      <Image src="/undraw/add.svg" />
    </Container>
  )
}

export default SignUpPageContent
