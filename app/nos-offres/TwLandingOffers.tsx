"use client"

import offre1 from "/public/offres1.webp"
import offre2 from "/public/offres2.webp"
import offre3 from "/public/offres3.webp"
import offre4 from "/public/offres4.webp"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import ButtonOffers from "./ButtonOffers"


  const features = [
    {
      name: 'Mariages et grands évènements',
      description:
        'Profitez de moments magiques, et laissez-vous porter.',
    },
    {
      name: 'Dîners privés',
      description:
        "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
    },
    {
      name: 'Le coin sucré',
      description:
        'Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l&lsquo;heure du goûter ou au petit-déjeuner.',
    },
    {
      name: 'Cocktails et réceptions',
      description:
        'De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.',
    },
    {
      name: 'Caterings et séminaires',
      description:
        'Caterings et séminaires',
    },
  ]
  export default function TwLandingOffers() {
        let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    return (
      <div className="bg-transparent">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div style={{y}} className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
              width={290}
              height={290}
              src={offre1}
              alt=""
              className="self-end rounded-lg bg-gray-100"
            />
            <Image
              width={290}
              height={290}
              src={offre2}
              alt=""
              className="rounded-lg bg-gray-100"
            />
          <Image
              width={290}
              height={290}
              src={offre3}
              alt=""
              className="rounded-lg bg-gray-100"
            />
            <Image
              width={290}
              height={290}
              src={offre4}
              alt=""
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div className="pl-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos offres</h2>
            <ButtonOffers />
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }