/* eslint-disable sonarjs/no-duplicate-string */
"use client"
import { BellAlertIcon } from "@heroicons/react/24/outline"
import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

import Banner from "@/components/Banner"
import Cooks from "@/components/Cooks"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import Testimonials from "@/components/Testimonials"
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
          {
            href: "/photos/dessert.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 2",
          },
          {
            href: "/photos/Diner.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 3",
          },
          {
            href: "/photos/Mariage.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 4",
          },
          {
            href: "/photos/assiette.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 1",
          },
        ]}
        features={[
          {
            name: "La table",
            description:
              "Profitez de moments magiques, et laissez-vous porter.",
          },
          {
            name: "Le snack",
            description:
              "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
          },
          {
            name: "Les évenements",
            description:
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l&lsquo;heure du goûter ou au petit-déjeuner.",
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
            <UtensilsCrossed className="mr-2 h-4 w-4" /> Parcourir nos offres
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
            description:
              "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés",
          },
        ]}
      />
      <Banner />

      <Cooks />
      <Slider />
      <Testimonials />
    </main>
  )
}
