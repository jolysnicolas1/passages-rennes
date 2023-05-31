"use client"

import cooks from "/public/cooks.jpg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import ButtonDiscover from "./ButtonDiscover"


export default function Cooks2() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
    return (
      <div className="bg-transparent relative">
        <motion.div style={{y}} className="overflow-hidden mx-auto max-w-7xl px-6 lg:flex lg:px-8 absolute">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vos cuistôts</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Passages, c’est l’histoire de deux amis, passionnés par le goût et animés par des valeur de partage et de gourmandise. 
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur expérience et leur complicité au service de vos événements.
              </p>
              <ButtonDiscover />

            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image className="aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover" src={cooks} alt="Picture of the author" width={500} height={900}/>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                {/* <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none flex-none  bg-gray-50 object-cover" src={cooks} alt="Picture of the author" width={500} height={900}/>
                </div> */}
                {/* <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image className="aspect-[7/5] w-[37rem] max-w-none flex-none  bg-gray-50 object-cover" src={cooks} alt="Picture of the author" width={500} height={900}/>
                </div> */}
                {/* <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image className="aspect-[4/3] w-[24rem] max-w-none  bg-gray-50 object-cover" src={cooks} alt="Picture of the author" width={500} height={900}/>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div style={{y}} className="overflow-hidden opacity-0 mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vos cuistôts</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
              Passages, c’est l’histoire de deux amis, passionnés par le goût et animés par des valeur de partage et de gourmandise. 
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
              Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur expérience et leur complicité au service de vos événements.
              </p>
              <ButtonDiscover />
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image className="aspect-[7/5] w-[37rem] max-w-none  bg-gray-50 object-cover" src={cooks} alt="Picture of the author" width={500} height={900}/>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }