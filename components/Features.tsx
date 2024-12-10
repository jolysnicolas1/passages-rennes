import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"
import Image from "next/image"
import React from "react"

type Props = {
  title: KeyTextField
  text?: RichTextField
  image: { src: string | null | undefined; alt: string }
  reversePosition?: boolean
  titleId?: string
  iconsAndTexts?: React.ReactNode
}

export default function Features({
  text,
  title,
  image,
  titleId,
  reversePosition,
  iconsAndTexts,
}: Props) {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-16 w-screen">
      <div className={`mx-auto max-w-7xl px-6 lg:px-8`}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div
            className={`lg:pr-8 lg:pt-4 ${
              reversePosition ? "lg:order-last" : "lg:order-none"
            }`}
          >
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <h2
                id={titleId}
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif"
              >
                {title}
              </h2>
              <div className="flex flex-col gap-2 mt-6 text-base sm:text-lg leading-8 text-gray-600">
                {text && <PrismicRichText field={text} />}
              </div>
              <div className="icons-and-texts text-gray-600">
                {iconsAndTexts}
              </div>
            </div>
          </div>
          <div className="relative">
            {image.src && (
              <Image
                fill
                src={image.src}
                alt={image.alt}
                className="hidden object-cover lg:block max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
