import cooks from "/public/cooks.webp"
import Image from "next/image"

  export default function Cooks() {
    return (
      <section
        aria-labelledby="presentation"
        className="mx-auto px-4"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <Image
                className="h-full w-full object-cover object-center"
                src={cooks}
                alt="Picture of the author"
                width={900}
                height={900}
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center p-8 space-y-8">
              <h2
                id="presentation"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">Vos cuistôts</span>
              </h2>
              <p className="mt-3 text-xl text-white pb-5">
                Passages, c’est l’histoire de deux amis, passionnés par le goût et animés
                par des valeur de partage et de gourmandise. Hugo et Pierre, l’un cuisinier,
                l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur
                expérience et leur complicité au service de vos événements.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }