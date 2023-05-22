"use client"

import Image from "next/image"
import offre1 from "../public/offres1.webp"
import offre2 from "/public/offres2.webp"
import offre3 from "/public/offres3.webp"
import offre4 from "/public/offres4.webp"
import OffersDescriptions from "./OffersDescriptions"
import OffersPictures from "./OffersPictures"
import { motion, useScroll, useTransform } from "framer-motion"

const features = [
  { name: "Cocktails et réceptions ", 
    description: "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie." },
  { name: "Dîners privés", 
    description: "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier" },
  {
    name: "Caterings et séminaires",
    description: "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés.",
  },
  { name: "Le coin sucré", 
    description: "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l’heure du goûter ou au petit-déjeuner." },
  {
    name: "Mariages et grands événements",
    description: "Profitez de moments magiques, et laissez-vous porter.",
  },
]

export default function Offers() {
  let { scrollYProgress } =useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
      <div className="mx-auto grid h-fit max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:mb-36 space-y-24">
        <motion.div style={{y}} className="">
          <OffersPictures></OffersPictures>
        </motion.div>
        <OffersDescriptions></OffersDescriptions>
      </div>
  )
}