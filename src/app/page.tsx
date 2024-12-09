'use client'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TableOfContents from '@/components/sections/TableOfContents'
import About from '../components/sections/About'
import Features from '@/components/sections/Features'
import FeaturesDetail from '@/components/sections/FeaturesDetail'
import HowItWorks from '@/components/sections/HowItWorks'
import Usage from '@/components/sections/Usage'
import FAQ from '@/components/sections/FAQ'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-black text-white ${spaceGrotesk.className}`}>
      <Header />
      <main className="flex-grow">
        <article>
          <Hero />
          <TableOfContents />
          <About />
          <Features />
          <FeaturesDetail />
          <HowItWorks />
          <Usage />
          <FAQ />
        </article>
      </main>
      <Footer />
    </div>
  )
}