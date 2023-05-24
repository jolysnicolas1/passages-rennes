import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import ThirdOfferPic from "./ThirdOfferPic";

export default function ThirdOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 
    return (
        <div className="flex italic">
            <ThirdOfferPic></ThirdOfferPic>
            <div className="w-2/4 m-5 flex align-center relative">
                <div className="flex flex-col italic text-xl font-thin">
                    <motion.div style={{y}} className="p-12 absolute flex flex-col space-y-12">
                        <p>texte third offer</p>
                        <p>texte plus long</p>
                        <p>texte</p>
                    </motion.div>
                    <motion.div style={{y}} className="opacity-0 p-12 flex flex-col space-y-12">
                        <p>texte</p>
                        <p>texte plus long</p>
                        <p>texte</p>
                    </motion.div>
                </div>
            </div>
            
        </div> 
    )
}