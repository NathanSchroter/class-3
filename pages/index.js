import Head from 'next/head'
import styles from '@/styles/Home.module.css'
 import footer from '@/componets/header'
import Header from '@/componets/header'
import Footer from '@/componets/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main} `}>
        <Link href={'/exampleOne'}>Example 1</Link>
        <Link href={'/exampleTwe'}>Example 2</Link>
       < Link href={'/exampleThree'}>Example 3</Link>
       < Link href={'/exampleFour'}>Example 4</Link>
       < Link href={'/exampleFive'}>Example 5</Link>
      </main>
      <Footer/>
    </>
  )
}
