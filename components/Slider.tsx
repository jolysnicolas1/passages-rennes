"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const images = [
  "/portfolio07.jpg",
  "/portfolio08.jpg",
  "/portfolio12.jpg",
  "/portfolio15.jpg",
  "/portfolio17.jpg",
  "/portfolio18.png",
  "/portfolio10.jpg",
  "/portfolio20.jpg",
]

export default function Slider() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

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
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-md relative snap-center snap-always h-full shrink-0 drop-shadow-2xl"
          >
            <Image
              className="rounded-md object-contain h-full"
              src={image}
              alt=""
              width={600}
              height={900}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
