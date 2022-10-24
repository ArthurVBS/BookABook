import React, { useState } from 'react'
import Field from '../../../components/field'
import Radio from '../../../components/radio'
import { AccessType } from '../../../types/user'
import { Container, Title, Button } from './styles'

const Form: React.FC = () => {
  const [name, setName] = useState('')
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const [access, setAccess] = useState<AccessType>('Student')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const accessOptions = ['Student', 'Librarian'] as AccessType[]

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Title>Sign Up</Title>
      <Field type="text" placeholder="Name" state={name} setState={setName} />
      <Field
        type="text"
        placeholder="Registration"
        state={registration}
        setState={setRegistration}
      />
      <Field
        type="password"
        placeholder="Password"
        state={password}
        setState={setPassword}
      />
      <Radio options={accessOptions} state={access} setState={setAccess} />
      <Button type="submit">sign up</Button>
    </Container>
  )
}

export default Form
