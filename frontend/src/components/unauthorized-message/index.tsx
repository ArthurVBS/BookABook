import Router from 'next/router'
import React from 'react'

import {
  Button,
  Container,
  Image,
  Subtitle,
  TextContainer,
  Title,
} from './styles'

type Props = {
  accessRequired: string
}

const UnauthorizedMessage: React.FC<Props> = ({ accessRequired }) => {
  const handleClick = () => {
    Router.push('/login')
  }

  return (
    <Container>
      <TextContainer>
        <Title>You're Unauthorized!</Title>
        <Subtitle>
          You need a <span>{accessRequired} access</span> level. So, go to the
          login page and to be logged in.
        </Subtitle>
        <Button onClick={() => handleClick()}>Go To Login</Button>
      </TextContainer>

      <Image src="/undraw/access.svg" />
    </Container>
  )
}

export default UnauthorizedMessage
