import Image from 'next/image'
import Hero from './Hero'
import Offers from './Offers'
import Cooks from './Cooks'
import Banner from './Banner'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-24">
      <Hero />
      <Offers />
      <Cooks />
      <Banner />
    </main>
  )
}
