"use client"

import cooks from "/public/cooks.jpeg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import portfolio01 from "/public/portfolio01.jpg"
import portfolio02 from "/public/portfolio02.jpg"
import portfolio03 from "/public/portfolio03.jpg"
import portfolio04 from "/public/portfolio04.jpg"
import portfolio05 from "/public/portfolio05.jpg"
import portfolio06 from "/public/portfolio06.jpg"
import portfolio07 from "/public/portfolio07.jpg"
import portfolio08 from "/public/portfolio08.jpg"
import portfolio09 from "/public/portfolio09.jpg"
import portfolio10 from "/public/portfolio10.jpg"
import portfolio11 from "/public/portfolio11.jpg"
import portfolio12 from "/public/portfolio12.jpg"
import portfolio13 from "/public/portfolio13.jpg"
import portfolio14 from "/public/portfolio14.jpg"
import portfolio15 from "/public/portfolio15.jpg"
import portfolio16 from "/public/portfolio16.jpg"
import portfolio17 from "/public/portfolio17.jpg"
import portfolio18 from "/public/portfolio18.jpg"
import portfolio19 from "/public/portfolio19.jpg"
import portfolio20 from "/public/portfolio20.jpg"


  export default function Slider() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

    return (
        <div className="relative max-w-full w-full xl:max-w-7xl h-96">
            <motion.div style={{y}} className="
            absolute 
            m-12 
            h-full
            drop-shadow-2xl
            snap-mandatory snap-x 
            bg-transparent 
            overflow-x-scroll 
            relative 
            mx-auto 
            max-w-full 
            xl:max-w-7xl 
            flex 
            lg:items-center 
            lg:px-8">
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio02} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio01} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio03} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio04} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio05} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio06} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio07} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio08} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio09} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio10} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio11} alt="" width={300} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio12} alt="" width={400} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio13} alt="" width={400} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio14} alt="" width={400} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio15} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio16} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio17} alt="" width={400} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio18} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio19} alt="" width={600} height={900} />    
                </div>
                <div className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl">
                    <Image className="object-contain h-full" src={portfolio20} alt="" width={600} height={900} />    
                </div>
            </motion.div>
        </div>
    )
  }