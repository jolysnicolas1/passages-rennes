import LastOffers from "./LastOffers"

export default function Home() {
  return (
    <main className='
      flex
      flex-col
      min-h-screen max-w-4xl mx-auto'>

      <h1 className="p-5 text-3xl font-thin sm:text-4xl pt-12">
        Nos offres
      </h1>

      <LastOffers></LastOffers>

    </main>
  )
}