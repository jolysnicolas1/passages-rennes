"use client"

import cooks from "/public/cooks.jpeg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import portfolio01 from "/public/portfolio01.jpg"
import portfolio02 from "/public/portfolio02.jpg"
import portfolio03 from "/public/portfolio03.jpg"
import portfolio04 from "/public/portfolio04.jpg"


  export default function Slider() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
    return (
        <motion.div style={{y}} className="snap-mandatory snap-x space-x-24 bg-transparent overflow-x-scroll relative mx-auto max-w-7xl p-6 flex lg:items-center lg:px-8

        ">
            {/* <div className="bg-test relative px-6 sm:px-12 lg:px-16 overflow-x-scroll">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center p-8 space-y-8 shrink-0">
                    <h2
                    id="presentation" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block sm:inline">Vos cuistôts</span>
                    </h2>
                    <p className="mt-3 text-xl text-white pb-5">Passages, c’est l’histoire de deux amis, passionnés par le goût et animés par des valeur de partage et de gourmandise. Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de s’installer à Rennes afin de mettre leur expérience et leur complicité au service de vos événements.
                    </p>
                </div>
            </div> */}
            <div className="snap-center snap-always w-96 h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center" src={cooks} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always h-96 bg-red-500 shrink-0">
                 <Image className="object-cover h-full" src={portfolio01} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-fit h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center max-h-full" src={portfolio02} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-96 h-96 bg-red-500 shrink-0">
                <Image className="object-contain object-center" src={portfolio03} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-96 h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center" src={portfolio04} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-96 h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center" src={cooks} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always h-96 bg-red-500 shrink-0">
                 <Image className="object-cover h-full" src={portfolio01} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-fit h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center max-h-full" src={portfolio02} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-96 h-96 bg-red-500 shrink-0">
                <Image className="object-contain object-center" src={portfolio03} alt="Picture of the author" width={500} height={900}/>
            </div>
            <div className="snap-center snap-always w-96 h-96 bg-blue-500 shrink-0">
                <Image className="object-contain object-center" src={portfolio04} alt="Picture of the author" width={500} height={900}/>
            </div>
        </motion.div>
    )
  }