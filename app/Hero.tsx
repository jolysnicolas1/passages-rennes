import HeroContent from './HeroContent'
import ParallaxBlur from './ParallaxBlur';
import ParallaxBlurSecond from './ParallaxBlurSecond';


export default function Hero() {

    return (
      <div className="w-full">
        <div className="relative isolate">
          <ParallaxBlur />
          <ParallaxBlurSecond />

          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto px-6 lg:px-8 space-y-12">
              <HeroContent></HeroContent>
            </div>
          </div>
        </div>
      </div>
    )
  }