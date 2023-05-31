import TwKitchen from "@/TwKitchen"
import HeroBgTwo from "../HeroBgTwo"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between space-y-12 text-lime-950 my-24'>
      <TwKitchen></TwKitchen>
      <HeroBgTwo></HeroBgTwo>
    </main>
  )
}