import Image from "next/image"
import test from "/public/offers-mariage.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function FirstOfferPic() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]); 
    return (
        <motion.div style={{y}}  className="rounded-xl w-2/4 drop-shadow-md bg-white m-5 flex flex-col">
            <p className="p-5 text-medium italic">Mariages et grands évènements</p>
            <Image
                src={test}
                width={408}
                height={601}
                className="border-t-4 border-lime-600"
                alt="test picture"
                />
            <p className="p-5 text-gray-600">Profitez de moments magiques, et laissez-vous porter.</p>
        </motion.div>
    )
}