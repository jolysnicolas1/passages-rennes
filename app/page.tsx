"use client"

import Image from 'next/image'
import Hero from './Hero'
import Offers from './Offers'
import Cooks from './Cooks'
import Banner from './Banner'
import Slider from './Slider'
import { motion, useScroll, useTransform } from "framer-motion"



export default function Home() {

  let { scrollYProgress } =useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  let pas = "coucou js dans lqsdfqsdfqsa console" 

  return (
    <main className="relative flex min-h-screen flex-col mx-auto justify-between px-44">
      <Hero />
      <Offers />
      <div className="h-96 inset-x-0 bg-white"></div>
      <Cooks />
      <Banner />
      <Slider />
    </main>
  )
}
