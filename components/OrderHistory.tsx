"use client"

import Image from "next/image"

import HeroBgOne from "./HeroBgOne"

const orders = [
  {
    id: 3,
    href: "#",
    imageSrc: "/portfolio03.jpg",
    imageAlt: "Test",
  },
  {
    id: 4,
    href: "#",
    imageSrc: "/portfolio04.jpg",
    imageAlt: "Test",
  },
  {
    id: 6,
    href: "#",
    imageSrc: "/portfolio06.jpg",
    imageAlt: "Test",
  },
  {
    id: 8,
    href: "#",
    imageSrc: "/portfolio08.jpg",
    imageAlt: "Test",
  },
  {
    id: 5,
    href: "#",
    imageSrc: "/portfolio05.jpg",
    imageAlt: "Test",
  },
  {
    id: 7,
    href: "#",
    imageSrc: "/portfolio07.jpg",
    imageAlt: "Test",
  },
  {
    id: 9,
    href: "#",
    imageSrc: "/portfolio09.jpg",
    imageAlt: "Test",
  },
  {
    id: 10,
    href: "#",
    imageSrc: "/portfolio10.jpg",
    imageAlt: "Test",
  },
  {
    id: 11,
    href: "#",
    imageSrc: "/portfolio11.jpg",
    imageAlt: "Test",
  },
  {
    id: 2,
    href: "#",
    imageSrc: "/portfolio02.jpg",
    imageAlt: "Test",
  },
  {
    id: 12,
    href: "#",
    imageSrc: "/portfolio12.jpg",
    imageAlt: "Test",
  },
  {
    id: 13,
    href: "#",
    imageSrc: "/portfolio13.jpg",
    imageAlt: "Test",
  },
  {
    id: 14,
    href: "#",
    imageSrc: "/portfolio14.jpg",
    imageAlt: "Test",
  },
  {
    id: 15,
    href: "#",
    imageSrc: "/portfolio15.jpg",
    imageAlt: "Test",
  },
  {
    id: 16,
    href: "#",
    imageSrc: "/portfolio16.jpg",
    imageAlt: "Test",
  },
  {
    id: 17,
    href: "#",
    imageSrc: "/portfolio17.jpg",
    imageAlt: "Test",
  },
  {
    id: 18,
    href: "#",
    imageSrc: "/portfolio18.jpg",
    imageAlt: "Test",
  },
  {
    id: 19,
    href: "#",
    imageSrc: "/portfolio19.jpg",
    imageAlt: "Test",
  },
  {
    id: 20,
    href: "#",
    imageSrc: "/portfolio20.jpg",
    imageAlt: "Test",
  },
  {
    id: 21,
    href: "#",
    imageSrc: "/portfolio21.jpg",
    imageAlt: "Test",
  },
  {
    id: 22,
    href: "#",
    imageSrc: "/portfolio22.jpg",
    imageAlt: "Test",
  },
  {
    id: 24,
    href: "#",
    imageSrc: "/portfolio24.jpg",
    imageAlt: "Test",
  },
  {
    id: 25,
    href: "#",
    imageSrc: "/portfolio25.jpg",
    imageAlt: "Test",
  },
  {
    id: 29,
    href: "#",
    imageSrc: "/portfolio29.jpg",
    imageAlt: "Test",
  },
  {
    id: 23,
    href: "#",
    imageSrc: "/portfolio23.jpg",
    imageAlt: "Test",
  },
  {
    id: 26,
    href: "#",
    imageSrc: "/portfolio26.jpg",
    imageAlt: "Test",
  },
  {
    id: 27,
    href: "#",
    imageSrc: "/portfolio27.jpg",
    imageAlt: "Test",
  },
  {
    id: 28,
    href: "#",
    imageSrc: "/portfolio28.jpg",
    imageAlt: "Test",
  },
]

export default function OrderHistory() {
  return (
    <main
      className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      aria-labelledby="order-history-heading"
    >
      <HeroBgOne></HeroBgOne>
      <div className="max-w-xl">
        <h1
          id="order-history-heading"
          className="text-3xl font-semibold tracking-tight text-gray-900"
        >
          Portfolio
        </h1>
        <p className="mt-2 text-sm text-gray-500"></p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {orders.map(order => (
          <div
            key={order.id}
            className="group relative"
          >
            <div className="aspect-square overflow-hidden rounded-md bg-black flex">
              <Image
                className="object-cover object-center"
                src={order.imageSrc}
                width={500}
                height={1000}
                alt={order.imageAlt}
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
