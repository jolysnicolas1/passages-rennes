"use client"

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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-myYellow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   <div className="h-[70vh] flex flex-col justify-center text-center bg-[url('/photos/hero.jpg')]">
    //         <h1 className="font-serif text-6xl font-medium tracking-tight text-lime-950 sm:text-9xl">
    //           Passages
    //         </h1>
    //       <p className="mt-6 text-3xl leading-8 text-gray-600 font-medium">
    //       Rennes
    //       </p>
    //       <ButtonContact />
    // </div>
  )
}
