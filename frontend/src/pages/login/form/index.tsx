import React, { useEffect, useState } from 'react'
import { Button, Container, Title } from './styles'

import Field from '../field'
import { useAuth } from '../../../contexts/auth-context'

const Form: React.FC = () => {
  const { login, user } = useAuth()
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('Login')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(registration, password)
  }

  // Next.js
  useEffect(() => {
    if (user.name !== undefined) {
      setUsername(user.name)
    }
  })

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Title>{username}</Title>
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
