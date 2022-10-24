import React, { useState } from 'react'
import { Button, Container, Title } from './styles'

import Field from '../../../components/field'
import { useAuth } from '../../../contexts/auth-context'

const Form: React.FC = () => {
  const { login } = useAuth()
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(registration, password)
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
