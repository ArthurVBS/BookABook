import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { UserType } from '../../src/types/user'
import { initialUser, useAuth } from '../../src/contexts/auth-context'

import Head from '../../src/components/head'
import Header from '../../src/components/header'
import Navbar from '../../src/components/navbar'
import UnauthorizedMessage from '../../src/components/unauthorized-message'
import MyBooksPageContent from '../../src/pages/my-books'

const MyBooks: NextPage = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>(initialUser)

  // Next.js
  useEffect(() => {
    setUserState(user)
  }, [])

  const accessRequired = 'Student'

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
