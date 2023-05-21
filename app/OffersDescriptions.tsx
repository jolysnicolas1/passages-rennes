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

export default function OffersDescriptions() {
  
  return (
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
  )
}