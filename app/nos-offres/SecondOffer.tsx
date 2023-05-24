import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import SecondOfferPic from "./SecondOfferPic";

export default function SecondOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); 
    return (
        <div className="flex italic relative">
            <div className="w-2/4 m-5 flex justify-end relative">
                <div className="flex italic text-2xl font-light text-gray-600">
                    <motion.div style={{y}}  className="absolute p-12 flex flex-col space-y-12">
                        <p className="text-right">Chefs privés</p>
                        <p className="text-right">Cuisiné sur place ou livré à domicile</p>
                        <p className="text-right">Plats de saison</p>
                    </motion.div>
                    <motion.div style={{y}}  className="opacity-0 p-12 flex flex-col space-y-12">
                        <p className="text-right">Chefs privés</p>
                        <p className="text-right">Cuisine sur place ou livré à domicile</p>
                        <p className="text-right">Plats de saison</p>
                    </motion.div>
                </div>
            </div>
            <SecondOfferPic></SecondOfferPic>
        </div>  
    )
}