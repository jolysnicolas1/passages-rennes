"use client"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

import { CameraIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { buttonVariants } from "./ui/button"

const images = [
  "/photos/portfolio16.jpg",
  "/photos/portfolio9.jpg",
  "/photos/portfolio14.jpg",
  "/photos/portfolio13.jpg",
  "/photos/portfolio21.jpg",
  "/photos/portfolio23.jpg",
  "/photos/portfolio17.jpg",
  "/photos/portfolio7.jpg",
]

export default function Slider() {
  return (
    <div className="bg-transparent pt-24">
      <div className="overflow-hidden mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1  order-last lg:order-first">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              loop={true}
              initialSlide={3}
            >
              {images.map((image, i) => (
                <SwiperSlide key={image}>
                  <div className="rounded-md h-full shrink-0 drop-shadow-2xl relative">
                    <Image
                      // className="rounded-md object-contain h-full"
                      src={image}
                      alt={`Passages - Portfolio ${i}`}
                      objectFit="cover"
                      fill
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"></div>
          </div>

          <div className="space-y-4 lg:w-full lg:max-w-sm  xl:max-w-xl">
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl pb-12">
              Nos réalisations
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              a malesuada sem. Vestibulum eget sem mi. Sed risus nisi, tempus at
              nisl non, ornare accumsan lorem.
            </p>
            <p className="text-lg leading-8 text-slate-600">
              Mauris ultrices ex in neque convallis, in ornare augue eleifend.
              Proin feugiat, purus sed ornare posuere, ex risus pretium nisi
            </p>
            <Link
              href="/qui-sommes-nous"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <CameraIcon className="mr-2 h-4 w-4" /> Voir le portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
