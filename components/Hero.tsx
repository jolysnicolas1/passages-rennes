"use client"

// import { motion, useScroll, useTransform } from "framer-motion"

// import HeroBgOne from './HeroBgOne'
// import HeroBgTwo from './HeroBgTwo'
import HeroContent from "./HeroContent"

export default function Hero() {
  // let { scrollYProgress } =useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
    // <motion.div style={{y}} className="w-full">
    //   <div className="relative isolate pt-14">
    //     <HeroBgOne />
    <HeroContent />
    //     <HeroBgTwo />
    //   </div>
    // </motion.div>
  )
}
