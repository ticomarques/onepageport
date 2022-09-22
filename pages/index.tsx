import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Tiago Marques Frontend Engineer website, you can access all information about me, like portfolio, about section and contact. Feel free to contact using the form in the contact section.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      { /** Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      { /** About */}

      { /** Experience */}

      { /** Skills */}

      { /** Projects */}

      { /** Contact */}
      
    </div>
  )
}

export default Home
