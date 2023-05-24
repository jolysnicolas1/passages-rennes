import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ThirdOfferPic() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]); 
    return (
        <motion.div style={{y}}  className="rounded-xl w-2/4 drop-shadow-md bg-white m-5 flex flex-col">
            <p className="p-5 text-medium italic">Le coin sucré</p>
            <Image
                src={test}
                width={408}
                height={601}
                className="border-t-4 border-lime-600"
                alt="test picture"
                />
            <p className="p-5 text-gray-600">Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l’heure du goûter ou au petit-déjeuner. </p>
        </motion.div>
    )
}