import React, { useEffect, useState } from 'react'
import { Container } from './styles'

import { useAuth } from '../../contexts/auth-context'
import { UserType } from '../../types/user'

const MyBooksPageContent: React.FC = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>({})

  useEffect(() => {
    setUserState(user)
  }, [])

  return <Container>Hello, {userState.name}</Container>
}

export default MyBooksPageContent
