"use client"

import TwOffers from "./TwOffers"
import OfferBg from "./OfferBg"

export const metadata = {
  title: 'Passages | Nos offres',
  description: 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.',
}

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