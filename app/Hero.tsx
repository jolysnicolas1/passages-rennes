import HeroContent from './HeroContent'
import HeroBgOne from './HeroBgOne'
import HeroBgTwo from './HeroBgTwo'


export default function Hero() {
    return (
      <div className="bg-white w-full">
        <div className="relative isolate pt-14">
          <HeroBgOne></HeroBgOne>
          <HeroContent></HeroContent>
          <HeroBgTwo></HeroBgTwo>
        </div>
      </div>
    )
  }