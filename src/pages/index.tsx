import type { NextPage } from 'next'
import Head from 'next/head'
import { Home } from "@components/Home"
const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hamx2</title>
        <meta name="description" content="Ham Ham Yap" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  )
}

export default App
