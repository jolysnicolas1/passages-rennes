"use client"

import TwOffers from "./TwOffers"
import OfferBg from "./OfferBg"

export default function Home() {
  return (
    <main className='
      flex
      flex-col
      min-h-screen max-w-4xl mx-auto'>
      <TwOffers></TwOffers>
      <OfferBg></OfferBg>
    </main>
  )
}