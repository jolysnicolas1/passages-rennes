"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

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
import portfolio18 from "/public/portfolio18.png"
import portfolio19 from "/public/portfolio19.png"
import portfolio20 from "/public/portfolio20.jpg"

const imageList = [
  portfolio02,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolio07,
  portfolio08,
  portfolio09,
  portfolio10,
  portfolio11,
  portfolio12,
  portfolio13,
  portfolio14,
  portfolio15,
  portfolio16,
  portfolio17,
  portfolio18,
  portfolio19,
  portfolio20
];

export default function Slider() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div className="relative max-w-full w-full xl:max-w-7xl h-96">
      <motion.div
        style={{ y }}
        className="
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
        lg:px-8
        "
      >
        {imageList.map((imageSrc, index) => (
          <div
            key={index}
            className="relative snap-center snap-always h-full shrink-0 drop-shadow-2xl"
          >
            <Image
              className="object-contain h-full rounded-md"
              src={imageSrc}
              alt=""
              width={300}
              height={900}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
