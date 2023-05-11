import Image from "next/image"
import offre1 from "../public/offres1.webp"
import offre2 from "/public/offres2.webp"
import offre3 from "/public/offres3.webp"
import offre4 from "/public/offres4.webp"

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
  return (
    <div className="">
      <div className="mx-auto grid h-fit max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4">
          <div className="mb-20 grid items-center justify-items-end gap-4">
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
          </div>
          <div className="grid items-center justify-items-start">
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
        <div className="max-w-2xl min-h-full flex flex-col justify-between pb-24">
          <h2 className="py-3 text-3xl font-bold tracking-tight text-lime-950 sm:text-4xl my-5">
            Nos offres
          </h2>
          <dl className="space-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-lime-950 text-xl italic">{feature.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}