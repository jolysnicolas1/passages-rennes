export default function Banner() {
    return (
      <div className="bg-gray-300 py-32 space-y-12">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-red-950 sm:text-4xl">
            <p className="">Un devis, une demande, un événement ?</p>
            <p className="">Contactez-nous</p>
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <div className="m-10 items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <p className="italic text-white font-medium">Passages se dévoue à faire exister des événements qui vous ressemblent. Peu importe votre projet, nous sommes là pour vous assurer une prestation sur-mesure. Vous voulez organiser un mariage végétarien ? Un cocktail en plein-air, ou un banquet à la ferme ? Un repas d'entreprise en format gastronomique ? Un dîner privé, à six à la maison ou dans un cadre atypique ? Un catering adapté à toutes les restrictions alimentaires pour le tournage de votre film ? Suprendre des amis avec un brunch en formule omakase ? Un goûter d'anniversaire pour grands enfants amateurs de pâtisseries fines ? </p>
          <p className="italic text-white font-medium">Sur Rennes, en Bretagne, ou même plus loin, n'hésitez pas à prendre contact avec nous pour donner vie à vos projets. </p>
        </div>
      </div>
    )
  }
  