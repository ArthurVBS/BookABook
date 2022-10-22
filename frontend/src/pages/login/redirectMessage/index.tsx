import Router from 'next/router'
import React, { useEffect, useState } from 'react'

import { Button, Container, Subtitle, Title } from './styles'

const RedirectMessage: React.FC = () => {
  const [count, setCount] = useState(10)

  const handleClick = () => {
    Router.push('/')
  }

  setTimeout(() => {
    setCount(count - 1)
  }, 1000)

  useEffect(() => {
    if (count == 0) {
      Router.push('/')
      setCount(10)
    }
  }, [count])

  return (
    <Container>
      <Title>You are already logged in</Title>
      <Subtitle>You'll be redirected to the home in {count} seconds</Subtitle>
      <Button onClick={() => handleClick()}>Go To Home</Button>
    </Container>
  )
}

export default RedirectMessage
