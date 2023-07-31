import Image from "next/image"

import portfolio18 from "/public/portfolio18.png"
import portfolio19 from "/public/portfolio19.png"
import portfolio22 from "/public/portfolio22.png"
import portfolio24 from "/public/portfolio24.png"

export default function TwKitchen() {
  return (
    <div className="py-96 space-y-24">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Catering, cuisine gastronomique, offre végétarienne et
              végétalienne végétarienne
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Passages, c’est une vision de la gastronomie centrée sur le
              dialogues des mondes, ou la gastronomie rencontre la street-food,
              la cuisine traditionnelle française puise dans des influences du
              monde entier, l’élégance épouse la convivialité, où l’on travaille
              avec autant de plaisir des plats végétariens que des viandes
              d’éleveurs locaux, et où les desserts jouent d’associations
              inattendues.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              C’est aussi l’exigence de mettre en avant des produits de qualité,
              locaux et de saison, un travail au plus proche des producteurs,
              pour vous offrir le meilleur.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                className="rounded-md aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover"
                src={portfolio18}
                alt="Picture of the author"
                width={500}
                height={900}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  className="rounded-md aspect-[4/3] w-[24rem] max-w-none flex-none  bg-gray-50 object-cover"
                  src={portfolio19}
                  alt="Picture of the author"
                  width={500}
                  height={900}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  className="rounded-md aspect-[7/5] w-[37rem] max-w-none flex-none  bg-gray-50 object-cover"
                  src={portfolio24}
                  alt="Picture of the author"
                  width={500}
                  height={900}
                />
              </div>
              <div className="z-0 hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  className="rounded-md aspect-[4/3] w-[24rem] max-w-none  bg-gray-50 object-cover"
                  src={portfolio22}
                  alt="Picture of the author"
                  width={500}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-black border-4 mx-auto max-w-7xl px-6 lg:px-8 pb-20 pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Notre parcours, nos valeurs
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Pierre et Hugo se sont rencontrés à Rennes durant leurs études,
                lors de dîners qu&apos;ils organisaient pour leurs amis. Mordus
                de gastronomie et férus d&apos;écologie, ils se sont vite pris
                au jeu, et se sont impliqués dans un cadre associatif pour
                proposer leur vision d&apos;une gastronomie conviviale,
                gourmande et durable, mettant notamment en avant la cuisine
                végétarienne. Poussés par leur perfectionnisme, ils ont opté
                pour une reconversion complète, et après avoir passé leurs
                diplômes de cuisinier et de pâtissier-chocolatier, ont choisi
                d&apos;aller affûter leur technique dans des établissements
                prestigieux, restaurants étoilés, palaces et M.O.F.
              </p>
              <div className="mt-10 text-xl leading-8 text-gray-600">
                <p>
                  Aujourd&apos;hui de retour en Bretagne, ils vous proposent
                  leur vision d&apos;une gastronomie de partage, respectueuse de
                  l&apos;humain comme de l&apos;environnement, accueillante et
                  inclusive, pensée pour et avec vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
