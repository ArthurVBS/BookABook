import type { NextPage } from 'next'

import { useState, useEffect } from 'react'
import { useAuth } from '../../src/contexts/auth-context'
import { UserType } from '../../src/types/user'

import Head from '../../src/components/head'
import Header from '../../src/components/header'
import Navbar from '../../src/components/navbar'
import UnauthorizedMessage from '../../src/components/unauthorized-message'
import MyBooksPageContent from '../../src/pages/my-books'

const MyBooks: NextPage = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>({})
  const accessRequired = 'Student'

  useEffect(() => {
    setUserState(user)
  }, [])

  return (
    <>
      <Head title="BaB | My Books" />
      <Header />
      <Navbar />
      {userState.access === accessRequired ? (
        <MyBooksPageContent />
      ) : (
        <UnauthorizedMessage accessRequired={accessRequired} />
      )}
    </>
  )
}

export default MyBooks
