import Image from "next/image";

const features = [
  { 
    name: "Cocktails et réceptions ", 
    description: "De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.",
    src: "/offers-service.jpg",
  },
  { 
    name: "Dîners privés", 
    description: "Mettez-vous à l’aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier",
    src: "/offers-diner.jpg", },
  {
    name: "Caterings et séminaires",
    description: "Pour vos grands groupes et rassemblements, nous vous accompagnons en vous offrant des menus adaptés et variés.",
    src: "/offers-catering.jpg",
  },
  { name: "Le coin sucré", 
    description: "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l’heure du goûter ou au petit-déjeuner.",
    src: "/offers-sucre.jpg",
  },
  {
    name: "Mariages et grands événements",
    description: "Profitez de moments magiques, et laissez-vous porter.",
    src: "/offers-mariage.jpg"
  },
]

export default function Detailled() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="py-3 text-3xl font-bold tracking-tight text-lime-950 sm:text-4xl pt-12">
        Nos offres
      </h1>
      <p className="mt-4 text-lg text-lime-950 py-12">
        Pour vos séminaires, fêtes d’anniversaire, mariages, caterings, dîners privés,
        cocktails ou buffets, nous élaborons un menu sur-mesure, totalement adapté à
        vos besoins. Nous serons ravis de vous présenter nos solutions de traiteur et
        de chefs privés, sur Rennes et dans ses environs. Cuisinés sur place ou en
        livraison, nous vous proposons des plats de saison, élaborés à partir de
        produits frais et s’adaptant à votre régime alimentaire, notamment en mettant
        à l’honneur le végétal avec notre offre végétarienne et végétalienne.
      </p>

      <dl className="space-y-4 mb-12">
        {features.map((feature) => (
          <div key={feature.name} className="border  p-5 m-5 border-gray-200 pt-4 space-y-4 drop-shadow-md relative">
            <dt className="font-medium text-lime-950 text-xl italic">{feature.name}</dt>
            <dd className="text-md text-gray-500">{feature.description}</dd>
            <Image
                width={900}
                height={300}
                src={feature.src}
                className=""
                object-fit="cover"
                alt="image"
            />
          </div>
        ))}
      </dl>
    </div>
  )
}