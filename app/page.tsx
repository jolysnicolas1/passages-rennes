/* eslint-disable sonarjs/no-duplicate-string */
"use client"
import { BellAlertIcon } from "@heroicons/react/24/outline"
import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

import Banner from "@/components/Banner"
import BottomButtons from "@/components/BottomButtons"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import Testimonials from "@/components/Testimonials"
import { buttonVariants } from "@/components/ui/button"
import { socials } from "@/lib/socials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <Offers
        link={
          <Link
            href=""
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <BellAlertIcon className="mr-2 h-4 w-4" /> Ouverture début septembre
          </Link>
        }
        title="La table des Ateliers du vent"
        titleId="laTable"
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
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l'heure du goûter ou au petit-déjeuner.",
          },
        ]}
      />
      <Features
        reversePosition
        title="Nos valeurs"
        titleId="nosValeurs"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Passages, c’est une vision de la gastronomie centrée sur le
              dialogues des mondes, ou la gastronomie rencontre la street-food,
              la cuisine traditionnelle française puise dans des influences du
              monde entier, l’élégance épouse la convivialité, où l’on travaille
              avec autant de plaisir des plats végétariens que des viandes
              d’éleveurs locaux, et où les desserts jouent d’associations
              inattendues.
            </p>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              C’est aussi l’exigence de mettre en avant des produits de qualité,
              locaux et de saison, un travail au plus proche des producteurs,
              pour vous offrir le meilleur.
            </p>
          </>
        }
        image={{
          src: "/photos/equipe2.png",
          alt: "Passages Rennes - qui sommes nous ? ",
        }}
      />

      <Banner />
      <Offers
        titleId="traiteur"
        reversePosition
        link={
          <Link
            href="/#contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <UtensilsCrossed className="mr-2 h-4 w-4" /> Contactez-nous
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
              "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l'heure du goûter ou au petit-déjeuner.",
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

      <Slider />

      <Testimonials />

      <Features
        titleId="contact"
        title="Contact"
        text={
          <>
            <div className="space-y-6 pt-6">
              {socials.map(social => (
                <div
                  key={social.name}
                  className="flex gap-x-6"
                >
                  <social.icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                  <a
                    href={social.href}
                    className="text-sm sm:text-base font-semibold hover:underline leading-7 text-slate-900"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </>
        }
        image={{
          src: "/photos/contact.jpg",
          alt: "Passages Rennes - qui nous sommes ?",
        }}
      />

      <BottomButtons />
    </main>
  )
}
