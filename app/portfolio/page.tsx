"use client"

import Gallery from "../Gallery"
import HeroBgOne from "../HeroBgOne"
import OrderHistory from "../OrderHistory"

export const metadata = {
  title: 'Passages | Portfolio',
  description: 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.',
}

export default function Home() {
  return (
    <main className=''>
      {/* <HeroBgOne></HeroBgOne> */}
      <OrderHistory></OrderHistory>
        {/* <Gallery /> */}
    </main>
  )
}