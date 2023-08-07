import Features from "@/components/Features"
import HeroBgTwo from "@/components/HeroBgTwo"

export const metadata = {
  title: "Passages | Qui sommes-nous?",
  description:
    "Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.",
}

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between space-y-12 text-lime-950 my-24">
      <Features
        title="Notre parcours, nos valeurs"
        text={
          <>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pierre et Hugo se sont rencontrés à Rennes durant leurs études,
              lors de dîners qu&apos;ils organisaient pour leurs amis. Mordus de
              gastronomie et férus d&apos;écologie, ils se sont vite pris au
              jeu, et se sont impliqués dans un cadre associatif pour proposer
              leur vision d&apos;une gastronomie conviviale, gourmande et
              durable, mettant notamment en avant la cuisine végétarienne.
              Poussés par leur perfectionnisme, ils ont opté pour une
              reconversion complète, et après avoir passé leurs diplômes de
              cuisinier et de pâtissier-chocolatier, ont choisi d&apos;aller
              affûter leur technique dans des établissements prestigieux,
              restaurants étoilés, palaces et M.O.F.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Aujourd&apos;hui de retour en Bretagne, ils vous proposent leur
              vision d&apos;une gastronomie de partage, respectueuse de
              l&apos;humain comme de l&apos;environnement, accueillante et
              inclusive, pensée pour et avec vous.
            </p>
          </>
        }
        image={{
          src: "/photos/equipe4.jpg",
          alt: "Passages Rennes - qui nous sommes ?",
        }}
      />
      <Features
        reversePosition
        title="Catering, cuisine gastronomique, offre végétarienne et végétalienne"
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

      {/* <TwKitchen /> */}
      <HeroBgTwo />
    </section>
  )
}
