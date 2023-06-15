"use client"

import TwContact from '../TwContact'
import ContactBg from '../ContactBg'

export const metadata = {
  title: 'Passages | Contact',
  description: 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.',
}

export default function Home() {
  return (
    <main className="">
        <TwContact />
        <ContactBg />
    </main>
  )
}
