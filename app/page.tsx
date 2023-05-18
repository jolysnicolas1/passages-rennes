"use client"

import Image from 'next/image'
import Hero from './Hero'
import Offers from './Offers'
import Cooks from './Cooks'
import Banner from './Banner'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto justify-between px-44">
      <Hero />
      <Offers />
      <Cooks />
      <Banner />
    </main>
  )
}
