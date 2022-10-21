import type { NextPage } from 'next'

import Head from '../../src/components/head'
import Header from '../../src/components/header'
import Navbar from '../../src/components/navbar'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head title="BaB | Login" />
      <Header />
      <Navbar />
      <p>LoginPage</p>
    </>
  )
}

export default LoginPage
