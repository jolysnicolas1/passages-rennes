import LastOffers from "./LastOffers"
import TwOffers from "./TwOffers"
import BgOffer from "./BgOffer"

export default function Home() {
  return (
    <main className='
      flex
      flex-col
      min-h-screen max-w-4xl mx-auto'>
      <BgOffer></BgOffer>
      <TwOffers></TwOffers>

    </main>
  )
}