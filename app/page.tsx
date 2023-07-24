/* eslint-disable sonarjs/no-duplicate-string */
import { BellAlertIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import Banner from "@/components/Banner"
import Cooks2 from "@/components/Cooks2"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import TwTestimonies from "@/components/TwTestimonies"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <Offers
        link={
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver une table
          </Link>
        }
        title="La table des Ateliers du vent"
        images={[
          { href: "/photos/offre1.jpg", alt: "Passages Rennes - offre 1" },
          { href: "/photos/offre2.jpg", alt: "Passages Rennes - offre 2" },
          { href: "/photos/offre3.jpg", alt: "Passages Rennes - offre 3" },
          { href: "/photos/offre4.jpg", alt: "Passages Rennes - offre 4" },
        ]}
        features={[
          {
            name: "Mariages et grands évènements",
            description:
              "Profitez de moments magiques, et laissez-vous porter.",
          },
          {
            name: "Dîners privés",
            description:
              "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
          },
          {
            name: "Le coin sucré",
            description:
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l&lsquo;heure du goûter ou au petit-déjeuner.",
          },
          {
            name: "Cocktails et réceptions",
            description:
              "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
          },
          {
            name: "Caterings et séminaires",
            description: "Caterings et séminaires",
          },
        ]}
      />
      <Offers
        reversePosition
        link={
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver une table
          </Link>
        }
        title="Nos offres sur messure"
        images={[
          { href: "/photos/offre1.jpg", alt: "Passages Rennes - offre 1" },
          { href: "/photos/offre2.jpg", alt: "Passages Rennes - offre 2" },
          { href: "/photos/offre3.jpg", alt: "Passages Rennes - offre 3" },
          { href: "/photos/offre4.jpg", alt: "Passages Rennes - offre 4" },
        ]}
        features={[
          {
            name: "Mariages et grands évènements",
            description:
              "Profitez de moments magiques, et laissez-vous porter.",
          },
          {
            name: "Dîners privés",
            description:
              "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
          },
          {
            name: "Le coin sucré",
            description:
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l&lsquo;heure du goûter ou au petit-déjeuner.",
          },
          {
            name: "Cocktails et réceptions",
            description:
              "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
          },
          {
            name: "Caterings et séminaires",
            description: "Caterings et séminaires",
          },
        ]}
      />

      <Cooks2 />
      <Banner />
      <Slider />
      <TwTestimonies />
    </main>
  )
}
