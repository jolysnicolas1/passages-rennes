"use client"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { GroupField, KeyTextField } from "@prismicio/client"
import Image from "next/image"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import {
  CarrouselSliceDefaultPrimaryImagesItem,
  Simplify,
} from "@/prismicio-types"

export default function Slider({
  title,
  images,
}: {
  title: KeyTextField
  images: GroupField<Simplify<CarrouselSliceDefaultPrimaryImagesItem>>
}) {
  return (
    <div className="bg-transparent max-w-7xl mx-auto">
      <h2 className="mt-2 text-center pb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
        {title}
      </h2>
      <Swiper
        slidesPerView={1}
        // scrollbar={{
        //   hide: true,
        // }}
        navigation={true}
        spaceBetween={30}
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <div key={image.image.id}>
            {image.image.url && (
              <SwiperSlide key={image.image.id}>
                <div className="rounded-md h-full shrink-0 drop-shadow-2xl relative">
                  <Image
                    className="object-cover"
                    src={image.image.url}
                    alt={`Passages - Portfolio ${i}`}
                    fill
                  />
                </div>
              </SwiperSlide>
            )}
          </div>
        ))}
      </Swiper>
    </div>
  )
}
