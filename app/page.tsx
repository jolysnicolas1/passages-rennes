import Image from 'next/image'
import Hero from './Hero'
import Offers from './Offers'
import Cooks from './Cooks'
import Banner from './Banner'
import Slider from './Slider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12">
      <Hero />
      <Offers />
      <Cooks />
      <Banner />
      <Slider />
    </main>
  )
}
