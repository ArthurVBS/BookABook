import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { initialUser, useAuth } from '../../src/contexts/auth-context'
import { UserType } from '../../src/types/user'

import Head from '../../src/components/head'
import Header from '../../src/components/header'
import UnauthorizedMessage from '../../src/components/unauthorized-message'
import Navbar from '../../src/components/navbar'
import SignUpPageContent from '../../src/pages/sign-up'

const SignUp: NextPage = () => {
  const { user } = useAuth()
  const [userState, setUserState] = useState<UserType>(initialUser)

  // Next.js
  useEffect(() => {
    setUserState(user)
  }, [])

  const accessRequired = 'Librarian'

  return (
    <>
      <Head title="BaB | Sign Up" />
      <Header />
      <Navbar />
      {userState.access === accessRequired ? (
        <SignUpPageContent />
      ) : (
        <UnauthorizedMessage accessRequired={accessRequired} />
      )}
    </>
  )
}

export default SignUp
