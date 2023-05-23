import Image from "next/image"
import test from "/public/offers-mariage.jpg"
import { motion, useScroll, useTransform } from "framer-motion"


export default function OfferType() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    return (
    <div className="relative">
        <motion.div key="key" style={{y}} className="z-30 rounded-xl absolute m-5 bg-white flex flex-col align-center border-t border-gray-400 w-2/4 drop-shadow-xl">
            <dt className="p-5 font-medium text-lime-950 text-xl italic">Mariages</dt>
                <Image
                    src={test}
                    width={150}
                    height={200}
                    className="w-full drop-shadow-md border-t-4 border-lime-600"
                    alt="test picture"
                    />
            <dt className="font-normal text-lime-950 italic py-2 px-2">Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés.</dt>
        </motion.div>
        <motion.div key="key" style={{y}} className="rounded-xl m-5 bg-white flex flex-col align-center border-t border-gray-400 w-2/4 drop-shadow-xl">
            <dt className="p-5 font-medium text-lime-950 text-xl italic">Mariages</dt>
                <Image
                    src={test}
                    width={200}
                    height={290}
                    className="w-full drop-shadow-md"
                    alt="test picture"
                    />
            <dt className="font-normal text-lime-950 italic py-2 px-2">Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés.</dt>
        </motion.div>
    </div>
    )
}