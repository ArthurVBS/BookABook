import type { NextPage } from 'next'

import Head from '../../src/components/head'
import Header from '../../src/components/header'

const LoginPage: NextPage = () => {
  return (
    <>
      <Head title="BaB | Login" />
      <Header />
      <p>LoginPage</p>
    </>
  )
}

export default LoginPage
