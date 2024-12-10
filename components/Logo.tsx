import { GroupField, KeyTextField } from "@prismicio/client"
import Image from "next/image"

import {
  LogoSectionSliceDefaultPrimaryImagesItem,
  Simplify,
} from "@/prismicio-types"

const Logo = ({
  title,
  images,
}: {
  title: KeyTextField
  images: GroupField<Simplify<LogoSectionSliceDefaultPrimaryImagesItem>>
}) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center font-serif font-semibold tracking-tight text-slate-900 sm:text-4xl sm:pb-12">
          {title}
        </h2>
        <div className="mx-auto sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center">
          {images.map(image => (
            <div
              className={`mt-10 mr-8`}
              key={image.image.id}
            >
              {image.image.url && (
                <>
                  <Image
                    className="w-24 sm:w-32 mx-auto md:w-52 col-span-2 h-auto object-contain lg:col-span-1"
                    src={image.image.url}
                    alt={image.image.alt ? image.image.alt : `${title} - i`}
                    width={316 * 2}
                    height={96 * 2}
                  />
                  {image.image.alt && (
                    <p className="uppercase text-sm text-center mt-6">
                      {image.image.alt}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo
