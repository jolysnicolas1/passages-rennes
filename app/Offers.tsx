import OffersDescriptions from "./OffersDescriptions"
import OffersPictures from "./OffersPictures"
import { motion, useScroll, useTransform } from "framer-motion"



export default function Offers() {

  let { scrollYProgress } =useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
      <div className="flex w-full relative space-x-8">
        <motion.div className="w-2/4" style={{ y }}>
          <OffersPictures />
        </motion.div>
        <OffersDescriptions />
      </div>
  )
}