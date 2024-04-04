/* eslint-disable sonarjs/no-duplicate-string */
import { BellAlertIcon } from "@heroicons/react/24/outline"
import { UtensilsCrossed } from "lucide-react"
import Link from "next/link"

import Banner from "@/components/Banner"
import BottomButtons from "@/components/BottomButtons"
import Features from "@/components/Features"
import HeroContent from "@/components/HeroContent"
import Logo from "@/components/Logo"
import Offers from "@/components/Offers"
import Slider from "@/components/Slider"
import { buttonVariants } from "@/components/ui/button"
import { socials } from "@/lib/socials"
import { reservationLink } from "@/lib/utils"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 space-y-12 text-lime-950 rounded-md">
      <HeroContent />
      <Offers
        link={
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={reservationLink}
            className={
              buttonVariants({ variant: "outline", size: "lg" }) +
              " plausible-event-name=resa+desktop+table"
            }
          >
            <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver
          </Link>
        }
        title="La table des Ateliers du vent"
        titleId="la-table"
        images={[
          {
            href: "/photos/table1.jpg",
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
            href: "/photos/table4.jpg",
            alt: "Passages Rennes - la table des Ateliers du Vent 1",
          },
        ]}
        features={[
          {
            name: "La table",
            description: (
              <>
                Du mardi au vendredi de 12h à 14h
                <br />
                <br />
                Cuisine espiègle, locale et de saison, boissons audacieuses et
                desserts gloutons
              </>
            ),
          },
          {
            name: (
              <>
                Le snack
                <br />
                Sur place et à emporter
              </>
            ),
            description: (
              <>
                Du mardi au vendredi de 12h à 14h.
                <br />
                <br />
                Le jeudi soir, pendant les Buvette de 18h à 21h
                <br />
                <br />
                Et lors des événements publics:
                <br />
                Retrouvez-nous sur{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  href="https://www.lesateliersduvent.org/"
                >
                  l&apos;agenda des Ateliers du Vent
                </Link>
                <br />
                <br />
                Pas de réservation pour le Snack!{" "}
              </>
            ),
          },
          {
            name: "Les événements",
            description: (
              <>
                Autour d&apos;une scénographie, d&apos;un produit, d&apos;une
                ambiance.
                <br />
                <br />
                Suivez-nous sur les réseaux pour vous tenir au courant de tous
                nos événements
                <br />
                <div className="flex space-x-2">
                  {socials.map((item, i) => {
                    if (i === 3 || i === 4) {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-black hover:underline mt-2"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon
                            className="h-6 w-6 text-gray-700"
                            aria-hidden="true"
                          />
                        </Link>
                      )
                    }
                  })}
                </div>
              </>
            ),
          },
        ]}
      />
      <Features
        reversePosition
        title="Nos valeurs"
        text={
          <>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Passages, c’est une vision de la gastronomie centrée sur le
              dialogue des mondes, où la gastronomie rencontre la street-food,
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
          src: "/photos/valeurs.jpg",
          alt: "Passages Rennes - qui sommes nous ?",
        }}
      />

      <Banner />
      <Offers
        titleId="sur-mesure"
        reversePosition
        link={
          <a
            href="/#contact"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <UtensilsCrossed className="mr-2 h-4 w-4" /> Contactez-nous
          </a>
        }
        title="Nos offres sur mesure"
        images={[
          { href: "/photos/offre1.jpg", alt: "Passages Rennes - offre 1" },
          { href: "/photos/traiteur2.jpg", alt: "Passages Rennes - offre 2" },
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
          {
            name: "Privatisations",
            description: (
              <>
                Vous cherchez un endroit exceptionnel pour accueillir votre
                événement ? Nous mettons nos équipes et notre lieu à votre
                disposition.{" "}
                <a
                  className="underline"
                  href="https://form.heeds.eu/registration/10469/8afd3a9105968cd111197e9f3934a168"
                >
                  C&rsquo;est par ici!
                </a>
              </>
            ),
          },
        ]}
      />

      <Slider />

      <Logo />

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
          src: "/photos/contact2.jpg",
          alt: "Passages Rennes - qui nous sommes ?",
        }}
      />

      <BottomButtons />
    </main>
  )
}
