

export default function OffersDescriptions() {

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

    return (
        <div className="
        w-2/4
        min-h-full 
        flex flex-col justify-between 
        ">
          
            <h2 className="">
                Nos offres
            </h2>
            <dl className="">
                {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="">{feature.name}</dt>
                </div>
            ))}
            </dl>
        </div>
    )
}