import Banner from "@/components/Banner"
import Cooks2 from "@/components/Cooks2"
import HeroContent from "@/components/HeroContent"
import Slider from "@/components/Slider"
import TwLandingOffers from "@/components/TwLandingOffers"
import TwTestimonies from "@/components/TwTestimonies"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <TwLandingOffers />
      <Cooks2 />
      <Banner />
      <Slider />
      <TwTestimonies />
    </main>
  )
}
