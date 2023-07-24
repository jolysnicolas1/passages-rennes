"use client"

import Button from "./Button"

export default function HeroContent() {
  return (
    <div className="bg-gray-800 w-screen">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/photos/hero.jpg"
          alt=""
          className="absolute inset-0 opacity-50 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl font-serif font-bold tracking-tight text-white sm:text-9xl">
              Passages
            </h1>
            <p className="mt-6 text-4xl font-medium leading-8 text-white">
              Rennes
            </p>
            <div className="mt-10 flex sm:flex-row flex-col items-center justify-center gap-x-4">
              <Button href="/contact" >Réserver une table</Button>
              <a href="/" className="text-xl font-semibold leading-6 text-white">
                Vos évènements <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
