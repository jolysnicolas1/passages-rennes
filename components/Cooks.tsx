// import { ChefHat } from "lucide-react"
import Image from "next/image"

// import Link from "next/link"
import cooks from "/public/cooks.jpg"

// import { buttonVariants } from "./ui/button"

export default function Cooks() {
  return (
    <div className="bg-transparent pt-24">
      <div className="overflow-hidden mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 space-y-4">
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl pb-12">
              Nos valeurs
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Passages, c’est l’histoire de deux amis, passionnés par le goût et
              animés par des valeur de partage et de gourmandise.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Hugo et Pierre, l’un cuisinier, l’autre pâtissier, ont choisi de
              s’installer à Rennes afin de mettre leur expérience et leur
              complicité au service de vos événements.
            </p>
            {/* <Link
              href="/qui-sommes-nous"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <ChefHat className="mr-2 h-4 w-4" /> Découvrez l&apos;équipe
            </Link> */}
          </div>

          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                className="aspect-[7/5] w-[37rem] rounded-md max-w-none  bg-slate-50 object-cover"
                src={cooks}
                alt="Picture of the author"
                width={500}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
