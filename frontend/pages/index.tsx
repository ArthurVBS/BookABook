import type { NextPage } from 'next'

import Head from '../src/components/head'
import Header from '../src/components/header'
import Navbar from '../src/components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head title="BaB | Book a Book" />
      <Header />
      <Navbar />
      <p>HomePage</p>
    </>
  )
}

export default Home
