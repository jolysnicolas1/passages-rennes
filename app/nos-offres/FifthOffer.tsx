import Image from "next/image"
import test from "/public/offers-sucre.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import FifthOfferPic from "./FifthOfferPic";

export default function FifthOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 
    return (
        <div className="flex italic">
            {/* <div className="rounded-xl w-2/4 drop-shadow-md bg-white m-5 p-5 flex flex-col">
                <p className="py-5 text-medium italic">Mariages et grands évènements</p>
                <Image
                    src={test}
                    width={408}
                    height={601}
                    className=""
                    alt="test picture"
                    />
                <p className="py-5">De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.</p>
            </div> */}
            <FifthOfferPic></FifthOfferPic>
            <div className="w-2/4 m-5 flex align-center relative">
                <div className="flex flex-col italic text-2xl font-light text-gray-600">
                    <motion.div style={{y}} className="p-12 absolute flex flex-col space-y-12">
                        <p>Le végétal à l&apos;honneur</p>
                        <p>Offre végétarienne, végétalienne</p>
                    </motion.div>
                    <motion.div style={{y}} className="opacity-0 p-12 flex flex-col space-y-12">
                        <p>Le végétal à l&apos;honnuer</p>
                        <p>Offre végétarienne, végétalienne</p>
                    </motion.div>
                </div>
            </div>
            
        </div> 
    )
}