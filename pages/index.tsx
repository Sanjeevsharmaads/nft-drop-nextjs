import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-500 text-4xl font-bold">Welcome to NFT DROP CHALLENGE</h1>
    </div>
  )
}

export default Home
