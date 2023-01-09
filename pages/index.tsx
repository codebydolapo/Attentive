import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'


const Home: NextPage = () => {
  return (
    <div className={`${styles.main} font-montserrat text-[#4b4f56] relative`}>
      <Head>
        <title>attentive | home</title>
        <meta name="description" content="attentive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Mainbody/>
      <div className = {`bg-[#1e95d4] rounded-full w-[30rem] h-[30rem] absolute top-[-15rem] left-[-10rem] z-[-1] md:visible xs:invisible`}></div>
    </div>
  )
}

export default Home

//1e95d4
//7dd1df
//b5e5e7