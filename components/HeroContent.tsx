import Image from "next/image"

import heroImg from "../public/photos/hero.jpg"

export default function HeroContent() {
  return (
    <div className="bg-gray-800 w-screen">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          priority={true}
          src={heroImg}
          sizes="100vw"
          alt="Passage rennes - gastronomie sur mesure"
          className="absolute inset-0 opacity-50 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="uppercase font-pitch font-bold tracking-[0.085em] text-white text-4xl sm:text-7xl md:text-[8.1rem]">
              PASSAGES
              {/* <ReactCurvedText
                width={600}
                height={340}
                cx={300}
                cy={300}
                rx={200}
                ry={200}
                startOffset={-44}
                reversed={true}
                text="passages"
                // textProps={{ style: { fontSize: "8.15rem" } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null} */}
              {/* /> */}
            </h1>
            <p className="mt-2 sm:text-2xl font-medium sm:leading-8 text-white">
              aux Ateliers du vent
            </p>
            <p className="sm:text-2xl font-medium sm:leading-8 text-white">
              place Clara Zetkin Rennes
            </p>

            <div className="mt-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              {/* <Link
                target="_blank"
                rel="noopener noreferrer"
                href={reservationLink}
                className={buttonVariants({ variant: "outline", size: "xl" })}
              >
                <BellAlertIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 sm:mr-3" />{" "}
                Réserver
              </Link> */}
              {/* <Link
                href="/#sur-mesure"
                className={buttonVariants({ variant: "whiteLink", size: "xl" })}
              >
                Vos évènements <span aria-hidden="true"> →</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
