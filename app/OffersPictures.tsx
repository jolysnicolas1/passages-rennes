import Image from "next/image"
import offre1 from "../public/offres1.webp"
import offre2 from "/public/offres2.webp"
import offre3 from "/public/offres3.webp"
import offre4 from "/public/offres4.webp"
import { motion, useScroll, useTransform } from "framer-motion"

export default function OffersPictures() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    return (
        <div className="relative flex justify-end space-x-4">
            <motion.div className="space-y-4" style={{ y }}>
                <Image
                width={290}
                height={290}
                src={offre1}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="self-end rounded-lg bg-gray-100"
                />
                <Image
                width={290}
                height={290}
                src={offre3}
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
                />
            </motion.div>
            <div className="space-y-4 pt-5">
            <Image
                width={290}
                height={290}
                src={offre2}
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="self-end rounded-lg bg-gray-100"
            />
            <Image
                width={290}
                height={290}
                src={offre4}
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
            />
            </div>
        </div>
    )
}