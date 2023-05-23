import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"


export default function OfferCatering() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["-8%", "-80%"]);  
    return (
        <>
            <motion.div key="key" style={{y}} className="rounded-xl opacity-0 absolute m-5 bg-white flex flex-col align-center border-t border-gray-400 w-2/4 drop-shadow-xl">
                <dt className="p-5 font-medium text-lime-950 text-xl italic">Catering et séminaires</dt>
                    <Image
                        src={test}
                        width={200}
                        height={290}
                        className="w-full drop-shadow-md border-t-4 border-lime-600"
                        alt="test picture"
                        />
                <dt className="font-normal text-lime-950 italic py-2 px-2">De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.</dt>
            </motion.div>
            <motion.div key="key" style={{y}} className="z-40 rounded-xl text-right opacity-90 m-5 bg-white flex flex-col align-center border-t border-gray-400 w-2/4 drop-shadow-xl">
                <dt className="p-5 font-medium text-lime-950 text-xl italic">Catering et séminaires</dt>
                    <Image
                        src={test}
                        width={200}
                        height={290}
                        className="w-full drop-shadow-md"
                        alt="test picture"
                        />
                <dt className="font-normal text-lime-950 italic py-2 px-2">De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.</dt>
            </motion.div>
        </>
    )
}