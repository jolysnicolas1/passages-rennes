import ContactButton from "./ContactButton"

export default function Banner() {
    return (
      <div className="
        py-32 
        space-y-12 
        bg-slate-100 ">

        <div className="lg:flex lg:items-center lg:justify-between lg:px-8">

          <h2 className="">
            <p className="">Un devis, une demande, un événement ?</p>
            <p className="">Contactez-nous</p>
          </h2>
          <div className="flex items-center">
            <ContactButton />
          </div>
        </div>

        <div className="">
          <p className="italic font-medium">Passages se dévoue à faire exister des événements qui vous ressemblent. Peu importe votre projet, nous sommes là pour vous assurer une prestation sur-mesure. Vous voulez organiser un mariage végétarien ? Un cocktail en plein-air, ou un banquet à la ferme ? Un repas d&apos;entreprise en format gastronomique ? Un dîner privé, à six à la maison ou dans un cadre atypique ? Un catering adapté à toutes les restrictions alimentaires pour le tournage de votre film ? Suprendre des amis avec un brunch en formule omakase ? Un goûter d&apos;anniversaire pour grands enfants amateurs de pâtisseries fines ? </p>
          <p className="italic font-medium">Sur Rennes, en Bretagne, ou même plus loin, n&apos;hésitez pas à prendre contact avec nous pour donner vie à vos projets. </p>
        </div>

      </div>
    )
  }
  