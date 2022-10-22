import React, { useState } from 'react'
import Field from '../field'
import { Button, Container, Title } from './styles'

const Form: React.FC = () => {
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Title>Login</Title>
      <Field
        state={registration}
        setState={setRegistration}
        type="text"
        placeholder="Registration"
      />
      <Field
        state={password}
        setState={setPassword}
        type="password"
        placeholder="Password"
      />
      <Button type="submit">login</Button>
    </Container>
  )
}

export default Form
