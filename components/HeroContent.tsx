import Image from "next/image"

import heroImg from "../public/logos/passages_logo-baseline.png"

export default function HeroContent() {
  return (
    <div className="bg-[#FAF6F4] w-screen flex justify-center items-center">
      <h1>
        <Image
          priority={true}
          src={heroImg}
          width={1024}
          height={1693 / 2}
          quality={100}
          alt="Restaurant à Rennes, cuisine espiègle, locale et de saison"
          className="z-10 w-[80%] md:w-[40%] lg:w-[40%] mx-auto my-36"
        />
      </h1>
    </div>
  )
}
