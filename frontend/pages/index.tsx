import type { NextPage } from 'next'

import Head from '../src/components/head'
import Header from '../src/components/header'

const Home: NextPage = () => {
  return (
    <>
      <Head title="BaB | Book a Book" />
      <Header />
      <p>HomePage</p>
    </>
  )
}

export default Home
