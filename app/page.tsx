import Image from 'next/image'
import Hero from './Hero'
import Offers from './Offers'
import Cooks2 from './Cooks2'
import Banner from './Banner'
import Slider from './Slider'
import TwTestimonies from './nos-offres/TwTestimonies'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950">
      <Hero />
      <Offers />
      <Cooks2 />
      <Banner />
      <Slider />
      <TwTestimonies />
    </main>
  )
}
