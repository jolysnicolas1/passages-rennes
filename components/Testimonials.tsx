const testimonials = [
  {
    body: "Super repas préparé par l'équipe de Passages dans le cadre de notre séminaire : des légumes frais, des champignons, des textures qui se croisent, le tout, fini en beauté, par un beau gâteau sucré et terriblement réconfortant. Une cuisine sensible, douce, aux textures variés, c'était top !",
    author: {
      name: "Les Ateliers du vent",
    },
  },
  {
    body: "Lors d'un week-end accueillant 80 personnes, Passages nous a surpris par la qualité de sa cuisine digne d'un restaurant, revisitant des classiques gastronomiques populaires pour en faire des plats à tomber par terre, des entrées aux desserts. Grâce à une belle écoute de leur part, la préparation de l'événement a été agréable et a permis de discuter des menus et de l'utilisation de produits de qualité venant de réseaux paysans. On ne saurait trop les recommander !",
    author: {
      name: "La Confédération Paysanne",
    },
  },
  {
    body: "Passages nous a confectionné 2 repas lors d'une rencontre de 35 pédagogues de rue de Bretagne et d'ailleurs. Un avis unanime : des plats délicieux ! Nous avons toutes et tous apprécié les assaisonnements et les épices des betteraves fumées au sésame, de la salade de carottes aux agrumes ou des courges rôties harissa et coriandre. Une expérience à renouveler !",
    author: {
      name: "GPAS Bretagne",
    },
  },
  {
    body: "Passages nous a régalé tout un weekend avec une cuisine gourmande, savoureuse et harmonieuse, tant pour les papilles que pour les yeux. Tout terrain, petits plats dans les grands : ils se sont emparés de la cuisine non équipée du manoir, d'où sont ressorties des assiettes rieuses et raffinées composée de produits bien sourcés et locaux, `à leur sauce` tout en s'adaptant parfaitement à mes demandes.",
    author: {
      name: "Sophie",
    },
  },
  {
    body: "Pour la première fois où nous faisions appel à des chefs privés, nous n'aurions pas pu tomber mieux qu'avec Pierre et Hugo. En plus de leur délicieuse cuisine et de leurs pâtisseries extraordinaires, ils ont su être attentifs à nos demandes, chaleureux et de bon conseil. Nous n'avons qu'une hâte : recommencer !",
    author: {
      name: "Marianne",
    },
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl pb-12">
            On a travaillé pour eux
          </h2>
          <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl"></p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.author.name}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <div className="text-3xl text-gray-400 text-w-full">“</div>
                    <p>{testimonial.body}</p>
                    <div
                      dir="rtl"
                      className="text-3xl text-gray-400 text-w-full"
                    >
                      ”
                    </div>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial.author.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
