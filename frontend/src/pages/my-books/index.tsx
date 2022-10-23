import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { initialUser, useAuth } from '../../contexts/auth-context'
import { UserType } from '../../types/user'

const MyBooksPageContent: React.FC = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>(initialUser)

  // Next.js
  useEffect(() => {
    setUserState(user)
  }, [])

  return <Container>Hello, {userState.name}</Container>
}

export default MyBooksPageContent
