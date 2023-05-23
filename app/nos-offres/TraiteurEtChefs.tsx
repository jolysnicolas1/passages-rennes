import { motion, useScroll, useTransform } from "framer-motion"


export default function TraiteurEtChefs() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
    <motion.div style={{y}} key="key" className="z-50 absolute p-5 m-5 bg-white font-medium h-fit w-fit opacity-80 top-24 drop-shadow-xl rounded-full">
        <dt className="text-lime-950 italic">
            Solutions de traiteur et de chefs privés
        </dt>
    </motion.div>
    )
}