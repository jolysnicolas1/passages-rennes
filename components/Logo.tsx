import Image from "next/image"

const Logo = () => {
  const logos = [
    { src: "/logos/adv.png", alt: "les ateliers du vent" },
    { src: "/logos/france-tv.png", alt: "France Télévision" },
    { src: "/logos/tombees-de-la-nuit.png", alt: "Les tombées de la nuit" },
    { src: "/logos/lacriee-logo.png", alt: "La criée" },
    { src: "/logos/conf.png", alt: "La Confédération Paysanne" },
  ]
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl sm:pb-12">
          Ils nous ont fait confiance
        </h2>
        <div className="mx-auto sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center">
          {logos.map(logo => (
            <div
              className={`mt-10 mr-8`}
              key={logo.alt}
            >
              <Image
                className="w-24 sm:w-32 mx-auto md:w-52 col-span-2 h-auto object-contain lg:col-span-1"
                src={logo.src}
                alt={logo.alt}
                width={316 * 2}
                height={96 * 2}
              />
              <p className="uppercase text-sm text-center mt-6">{logo.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo
