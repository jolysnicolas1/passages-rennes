import DetailledOffers from "../DetailledOffers"
import FlexOffers from "./FlexOffers"

export default function Home() {
  return (
    <main className='
      flex
      flex-col
      min-h-screen max-w-screen xl:max-w-4xl mx-auto'>

      <h1 className="p-5 text-3xl font-medium text-lime-950 sm:text-4xl pt-12">
        Nos offres
      </h1>

      <FlexOffers></FlexOffers>
    </main>
  )
}