"use client"

import Image from "next/image"

import HeroBgOne from "./HeroBgOne"

export default function OrderHistory() {
  return (
    <div
      className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      aria-labelledby="order-history-heading"
    >
      <HeroBgOne />
      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 relative">
        {[...Array(32)].map((order, i) => (
          <div
            key={order}
            className="relative"
          >
            <Image
              className="rounded-md object-cover aspect-square"
              src={`/photos/portfolio${i}.jpg`}
              width={400}
              height={400}
              // fill
              alt={`Passage Rennes - portfolio ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
