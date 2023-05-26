import Image from "next/image"
import test from "/public/offers-sucre.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import FifthOfferPic from "./FifthOfferPic";

export default function FifthOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 
    return (
        <div className="flex italic">
            <FifthOfferPic></FifthOfferPic>
            <div className="w-2/4 m-5 flex align-center relative">
                <div className="flex flex-col italic text-2xl font-light text-gray-600">
                    <motion.div style={{y}} className="p-12 absolute flex flex-col space-y-12">
                        <p>Le végétal à l&lsquo;honneur</p>
                        <p>Offre végétarienne, végétalienne</p>
                    </motion.div>
                    <motion.div style={{y}} className="opacity-0 p-12 flex flex-col space-y-12">
                        <p>Le végétal à l&lsquo;honnuer</p>
                        <p>Offre végétarienne, végétalienne</p>
                    </motion.div>
                </div>
            </div>
            
        </div> 
    )
}