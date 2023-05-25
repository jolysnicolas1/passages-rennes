"use client"

import portfolio18 from "/public/portfolio18.jpg"
import portfolio19 from "/public/portfolio19.jpg"
import portfolio22 from "/public/portfolio22.jpg"
import portfolio24 from "/public/portfolio24.jpg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"


export default function TwKitchen() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    return (
      <div className="relative space-y-16">
        <motion.div className="z-0 overflow-hidden mx-auto max-w-7xl px-6 lg:flex lg:px-8 absolute">
          <div className="z-0 mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre cuisine</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Passages, c’est une vision de la gastronomie centrée sur le dialogues des mondes, ou la gastronomie rencontre la street-food, la cuisine traditionnelle française puise dans des influences du monde entier, l’élégance épouse la convivialité, où l’on travaille avec autant de plaisir des plats végétariens que des viandes d’éleveurs locaux, et où les desserts jouent d’associations inattendues. 
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
              C’est aussi l’exigence de mettre en avant des produits de qualité, locaux et de saison, un travail au plus proche des producteurs, pour vous offrir le meilleur.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image className="aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover" src={portfolio18} alt="Picture of the author" width={500} height={900}/>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none flex-none  bg-gray-50 object-cover" src={portfolio19} alt="Picture of the author" width={500} height={900}/>
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image className="aspect-[7/5] w-[37rem] max-w-none flex-none  bg-gray-50 object-cover" src={portfolio24} alt="Picture of the author" width={500} height={900}/>
                </div>
                <div className="z-0 hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none  bg-gray-50 object-cover" src={portfolio22} alt="Picture of the author" width={500} height={900}/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div style={{y}} className="z-0 overflow-hidden opacity-0 mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vos cuistôts</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Passages, c’est l’histoire de deux amis, passionnés par le goût et animés par des valeur de partage et de gourmandise. 
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur expérience et leur complicité au service de vos événements.
              </p>
              <div className="mt-10 flex">
                <a
                  href="/contact"
                  className=" bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Contactez-nous <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image className="aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover" src={portfolio18} alt="Picture of the author" width={500} height={900}/>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none flex-none  bg-gray-50 object-cover" src={portfolio19} alt="Picture of the author" width={500} height={900}/>
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image className="aspect-[7/5] w-[37rem] max-w-none flex-none  bg-gray-50 object-cover" src={portfolio22} alt="Picture of the author" width={500} height={900}/>
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none  bg-gray-50 object-cover" src={portfolio24} alt="Picture of the author" width={500} height={900}/>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="z-40 mx-auto max-w-7xl px-6 lg:px-8 pb-20 pt-32">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre parcours, nos valeurs</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                    Pierre et Hugo se sont rencontrés à Rennes durant leurs études, lors de dîners qu’ils organisaient pour leurs amis. Mordus de gastronomie et férus d’écologie, ils se sont vite pris au jeu, et se sont impliqués dans un cadre associatif pour proposer leur vision d’une gastronomie conviviale, gourmande et durable, mettant notamment en avant la cuisine végétarienne. Poussés par leur perfectionnisme, ils ont opté pour une reconversion complète, et après avoir passé leurs diplômes de cuisinier et de pâtissier-chocolatier, ont choisi d’aller affûter leur technique dans des établissements prestigieux, restaurants étoilés, palaces et M.O.F.
                </p>
                <div className="mt-10 text-base leading-7 text-gray-700">
                  <p>
                    Aujourd’hui de retour en Bretagne, ils vous proposent leur vision d’une gastronomie de partage, respectueuse de l’humain comme de l’environnement, accueillante et inclusive, pensée pour et avec vous.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                {/* <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }