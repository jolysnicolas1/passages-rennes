"use client"
import { HandRaisedIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import { buttonVariants } from "./ui/button"

export default function Banner() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 w-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Un devis, une demande, un événement ?
          </h2>
          {/* <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p> */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#contact"
              className={buttonVariants({ variant: "outline", size: "xl" })}
            >
              <HandRaisedIcon className="mr-2 h-4 w-4" /> Contactez nous
            </Link>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/4 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="1"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#a67c00" />
            <stop
              offset={1}
              stopColor="#3fa535"
            />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
