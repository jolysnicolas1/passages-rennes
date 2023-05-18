import Image from "next/image"
import logo from '/public/logo_passages_vert.png'
import ContactButton from "./ContactButton"


export default function HeroContent() {
    return(
        <div className="mx-auto max-w-4xl text-center space-y-12">
                <div className="flex items-center">
                    <Image
                        className="h-44 w-auto hidden md:inline"
                        src={logo}
                        alt="logo"
                        width={300}
                        height={300}
                    />
                  <h1 className="text-4xl font-medium tracking-tight text-lime-950 sm:text-6xl">
                  Passages <strong className="passage font-extralight">gastronomie itinérante et sur-mesure</strong>
                  </h1>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées . Contactez-nous pour déterminer ensemble l’offre qui vous conviendra le mieux !
                </p>

                <ContactButton />

              </div>
    )
}