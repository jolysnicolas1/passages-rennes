import TwKitchen from "@/TwKitchen"
import HeroBgTwo from "../HeroBgTwo"

export const metadata = {
  title: 'Passages | Qui sommes-nous?',
  description: 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.',
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between space-y-12 text-lime-950 my-24'>
      <TwKitchen></TwKitchen>
      <HeroBgTwo></HeroBgTwo>
    </main>
  )
}