"use client"

import HeroContent from './HeroContent'
import HeroBgOne from './HeroBgOne'
import HeroBgTwo from './HeroBgTwo'
import { motion, useScroll, useTransform } from "framer-motion"



export default function Hero() {
  let { scrollYProgress } =useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    return (
      <motion.div style={{y}} className="w-full">
        <div className="relative isolate pt-14">
          <HeroBgOne></HeroBgOne>
          <HeroContent></HeroContent>
          <HeroBgTwo></HeroBgTwo>
        </div>
      </motion.div>
    )
  }