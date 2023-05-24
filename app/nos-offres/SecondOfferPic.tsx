import Image from "next/image"
import test from "/public/offers-diner.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function SecondOfferPic() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); 
    return (
        <motion.div style={{y}}  className=" w-2/4 drop-shadow-md bg-white m-5 flex flex-col">
            <p className="p-5 text-medium italic">Dîners privés</p>
            <Image
                src={test}
                width={408}
                height={601}
                className="border-t-4 border-lime-600"
                alt="test picture"
                />
            <p className="p-5 text-gray-600">Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.</p>
        </motion.div>
    )
}