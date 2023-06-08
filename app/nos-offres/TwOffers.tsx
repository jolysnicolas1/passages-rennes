import Image from "next/image"


const features = [
    {
      name: 'Mariages et grands évènements',
      description:
        'Profitez de moments magiques, et laissez-vous porter.',
      imageSrc: '/offers-mariage.jpg',
      imageAlt: 'Mariage',
    },
    {
      name: 'Dîners privés',
      description:
        "Mettez-vous à l'aise, et laissez-nous organiser une prestation gastronomique hors du commun dans un cadre familier.",
      imageSrc: '/offers-diner.jpg',
      imageAlt: 'Dîners privés',
    },
    {
      name: 'Le coin sucré',
      description:
        "Offrez-vous un moment de gourmandise avec notre offre de pâtisseries fines, viennoiseries maison et boissons chaudes, à l'heure du goûter ou au petit-déjeuner.",
      imageSrc: '/offers-sucre.jpg',
      imageAlt: 'Coin sucré',
    },
    {
      name: 'Cocktails et réceptions',
      description:
        'De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.',
      imageSrc: '/offers-service.jpg',
      imageAlt: 'Cocktails et réceptions',
    },
    {
      name: 'Caterings et séminaires',
      description:
        'Caterings et séminaires',
      imageSrc: '/offers-catering.jpg',
      imageAlt: 'Catering et séminaires',
    },
  ]
  
  export default function TwOffers() {
    return (
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <p className="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos offres</p>
              <h2 className="font-semibold text-gray-500"><span className="text-lime-950">Passages</span> Gastronomie itinérante et sur-mesure</h2>
              <p className="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: "Pour vos séminaires, fêtes d&lsquo;anniversaire, mariages, caterings, dîners privés, cocktails ou buffets, nous élaborons un menu sur-mesure, totalement adapté à vos besoins. Nous serons ravis de vous présenter nos solutions de traiteur et de chefs privés, sur Rennes et dans ses environs. Cuisinés sur place ou en livraison, nous vous proposons des plats de saison, élaborés à partir de produits frais et s&lsquo;adaptant à votre régime alimentaire, notamment en mettant à l&lsquo;honneur le végétal avec notre offre végétarienne et végétalienne." }}>
              </p>
            </div>
  
            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
                  </div>
                  <div className="flex-auto lg:col-span-7 xl:col-span-8">
                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-md bg-gray-100">
                      <Image
                        src={feature.imageSrc}
                        width={800}
                        height={320}
                        className="object-cover object-center"
                        alt={feature.imageAlt}
                        />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }