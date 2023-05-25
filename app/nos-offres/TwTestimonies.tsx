const featuredTestimonial = {
    body: 'Super repas préparé par l&apos;équipe de Passages dans le cadre de notre séminaire : des légumes frais, des champignons, des textures qui se croisent, le tout, fini en beauté, par un beau gâteau sucré et terriblement réconfortant. Une cuisine sensible, douce, aux textures variés, c&apos;était top !',
    author: {
      name: 'Les Ateliers du vent',
      handle: 'Les atelier du vent',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
      logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'Lors d&apos;un week-end accueillant 80 personnes, Passages nous a surpris par la qualité de sa cuisine digne d&apos;un restaurant, revisitant des classiques gastronomiques populaires pour en faire des plats à tomber par terre, des entrées aux desserts. Grâce à une belle écoute de leur part, la préparation de l&apos;événement a été agréable et a permis de discuter des menus et de l&apos;utilisation de produits de qualité venant de réseaux paysans. On ne saurait trop les recommander !',
          author: {
            name: 'La Confédération Paysanne',
            handle: 'La Confédération Paysanne',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
    ],
    [
        {
          body: 'Passages nous a confectionné 2 repas lors d&apos;une rencontre de 35 pédagogues de rue de Bretagne et d&apos;ailleurs. Un avis unanime : des plats délicieux ! Nous avons toutes et tous apprécié les assaisonnements et les épices des betteraves fumées au sésame, de la salade de carottes aux agrumes ou des courges rôties harissa et coriandre. Une expérience à renouveler !',
          author: {
            name: 'GPAS Bretagne',
            handle: 'GPAS Bretagne',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
    ],
    [
        {
          body: 'Passages nous a régalé tout un weekend avec une cuisine gourmande, savoureuse et harmonieuse, tant pour les papilles que pour les yeux. Tout terrain, petits plats dans les grands : ils se sont emparés de la cuisine non équipée du manoir, d&apos;où sont ressorties des assiettes rieuses et raffinées composée de produits bien sourcés et locaux, "à leur sauce" tout en s&apos;adaptant parfaitement à mes demandes.',
          author: {
            name: 'Sophie',
            handle: 'Sophie',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
    ],
    [
        {
          body: 'Pour la première fois où nous faisions appel à des chefs privés, nous n&apos;aurions pas pu tomber mieux qu&apos;avec Pierre et Hugo. En plus de leur délicieuse cuisine et de leurs pâtisseries extraordinaires, ils ont su être attentifs à nos demandes, chaleureux et de bon conseil. Nous n&apos;avons qu&apos;une hâte : recommencer !',
          author: {
            name: 'Marianne',
            handle: 'Marianne',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
      ],
    ],
  ]
  
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }
  
  export default function TwTestimonies() {
    return (
      <div className="relative isolate  pb-32 pt-24 sm:pt-32">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#3FA535] to-[#3FA535]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#3FA535] to-[#3FA535] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Témoignages</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              Ont a travaillé pour eux
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="bg-white col-span-2 hidden sm:block sm:rounded-2xl sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl leading-8 tracking-tight text-gray-700">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                            <div className="text-4xl text-gray-600">“</div>
                            <p> {testimonial.body}</p>
                            <div className="text-4xl text-right text-gray-600">“</div>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  