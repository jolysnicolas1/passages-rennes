import { WobbleCard } from "@/components/ui/wobble-card"

import NewsInnerCard from "./NewsInnerCard"

const newsItems = [
  {
    title: "PROMENONS NOUS DANS LES BOIS",
    content:
      "Samedi 2 novembre Passages s'associe à Peggy Dalibert pour vous proposer un dîner exceptionnel dans le cadre du festival \"La Vilaine Frayeur\". Le temps d'une soirée, changez de perspective et laissez-vous entraîner dans un monde où la végétation a pris le dessus. Infos et réservations sur passages-rennes.com",
    imageUrl: "/fantome.png",
  },
  {
    title: "OUVERT LE LUNDI",
    content:
      "Retrouvez notre offre de restaurant et les propositions du snack dès le lundi midi pour bien démarrer la semaine à partir du 18 novembre. Réservation conseillée pour la Table.",
    imageUrl: "/conges.png",
  },
  {
    title: "CONGÉS",
    content:
      "Passages s’absente du 4 au 14 novembre pour quelques jours de repos et une prestation de traiteur. Contactez-nous via notre site web si vous souhaitez vous aussi organiser un événement!",
    imageUrl: "/lundi.png",
  },
]

const bgColors = [
  "bg-red",
  "bg-teal-900",
  "bg-blue-900",
  "bg-pink-800",
  "bg-amber-900",
]

export default function News() {
  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Actualités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <WobbleCard
              key={item.title}
              containerClassName={`${
                bgColors[index % newsItems.length]
              } col-span-1 max-w-sm`}
            >
              <NewsInnerCard
                title={item.title}
                content={item.content}
                imageUrl={item.imageUrl}
              />
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  )
}
