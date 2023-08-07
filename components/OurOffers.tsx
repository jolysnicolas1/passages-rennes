"use client"

import Image from "next/image"

import OfferBg from "./OfferBg"

const features = [
  {
    name: "Mariages et grands évènements",
    description: "Profitez de moments magiques, et laissez-vous porter.",
    imageSrc: "/offers-mariage.png",
    imageAlt: "Mariage",
  },
  {
    name: "Dîners privés",
    description:
      "Mettez-vous à l'aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
    imageSrc: "/offers-diner.jpg",
    imageAlt: "Dîners privés",
  },
  {
    name: "Le coin sucré",
    description:
      "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l'heure du goûter ou au petit-déjeuner.",
    imageSrc: "/offers-sucre.jpg",
    imageAlt: "Coin sucré",
  },
  {
    name: "Cocktails et réceptions",
    description:
      "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
    imageSrc: "/offers-service.jpg",
    imageAlt: "Cocktails et réceptions",
  },
  {
    name: "Caterings et séminaires",
    description:
      "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés",
    imageSrc: "/offers-catering.jpg",
    imageAlt: "Catering et séminaires",
  },
]

export default function OurOffers() {
  return (
    <div className="bg-transparent">
      <OfferBg />
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="my-2 text-3xl font-semibold tracking-tight font-serif mb-12 text-slate-900 sm:text-4xl">
              Nos offres, prestations et caterings
            </h2>
            <p className="my-4 text-gray-600 text-base sm:text-lg leading-8">
              Pour vos séminaires, fêtes d&lsquo;anniversaire, mariages,
              caterings, dîners privés, cocktails ou buffets, nous élaborons un
              menu sur-mesure, totalement adapté à vos besoins. Nous serons
              ravis de vous présenter nos solutions de traiteur et de chefs
              privés, sur Rennes et dans ses environs. Cuisinés sur place ou en
              livraison, nous vous proposons des plats de saison, élaborés à
              partir de produits frais et s&lsquo;adaptant à votre régime
              alimentaire, notamment en mettant à l&lsquo;honneur le végétal
              avec notre offre végétarienne et végétalienne.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-8">
              un paragraphe de plus avec un lien vers la résa des ateliers du
              vent
            </p>
          </div>

          <div className="mt-12 space-y-16 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map(feature => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg  sm:text-xl font-medium text-slate-900">
                    {feature.name}
                  </h3>
                  <p
                    className="mt-2 text-sm sm:text-base text-slate-500"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  ></p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-md bg-slate-100">
                    <Image
                      src={feature.imageSrc}
                      width={800}
                      height={320}
                      className="object-cover object-center"
                      alt={feature.imageAlt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
