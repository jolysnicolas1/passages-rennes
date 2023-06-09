import TwOffers from "./TwOffers"

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
    </main>
  )
}