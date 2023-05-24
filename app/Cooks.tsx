"use client"

import cooks from "/public/cooks.jpg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"


  export default function Cooks() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    return (
      <motion.div style={{y}} className="border-2 border-red-300 relative mx-auto max-w-7xl p-6 lg:flex lg:items-center lg:justify-between lg:px-8 drop-shadow-2xl
        before:inset-x-0
        before:inset-y-0
        before:bg-black
        before:bg-opacity-30
        before:absolute
        before:drop-shadow-2xl
      ">
        <div className="relative px-6 sm:px-12 lg:px-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center p-8 space-y-8">
            <h2
              id="presentation" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block sm:inline">Vos cuistôts</span>
            </h2>
            <p className="mt-3 text-xl text-white pb-5">Passages, c’est l’histoire de deux amis, passionnés par le goût et animés par des valeur de partage et de gourmandise. Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur expérience et leur complicité au service de vos événements.
            </p>
          </div>
        </div>

        <div className="bg-black inset-0 flex justify-center">
          <Image className="object-contain" src={cooks} alt="Picture of the author" width={500} height={900}/>
        </div>
      </motion.div>
    )
  }