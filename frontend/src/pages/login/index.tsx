import React, { useEffect, useState } from 'react'
import { Container, Image } from './styles'

import Form from './form'
import RedirectMessage from './redirectMessage'
import { useAuth } from '../../contexts/auth-context'
import { UserType } from '../../types/user'

const LoginPageContent: React.FC = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>({})

  // Next.js
  useEffect(() => {
    setUserState(user)
  }, [])

  return (
    <Container>
      {userState.id ? <RedirectMessage /> : <Form />}
      <Image
        src={userState.id ? '/undraw/authenticated.svg' : '/undraw/login.svg'}
      />
    </Container>
  )
}

export default LoginPageContent
