import Image from "next/image"
import logo from '/public/logo_passages_vert.png'
import ButtonContact from "../ButtonContact"


export default function HeroContent() {
    return (
        <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto px-6 lg:px-8 space-y-12">
          <div className="mx-auto max-w-4xl text-center space-y-12">
            <div className="flex items-center">
                <Image
                    className="h-44 w-auto hidden md:inline"
                    src={logo}
                    alt="Passages - gastronomie itinérante et sur-mesure"
                    width={300}
                    height={300}
                />
              <h1 className="text-4xl font-medium tracking-tight text-lime-950 sm:text-6xl">
                Passages <strong className="passage font-light">gastronomie itinérante et sur-mesure</strong>
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-medium">
            Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées. Contactez-nous pour déterminer ensemble l’offre qui vous conviendra le mieux !
            </p>
            <ButtonContact></ButtonContact>
          </div>
        </div>
      </div>
    )
}