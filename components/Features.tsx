import Image from "next/image"

type Props = {
  title: string
  text: React.ReactNode
  image: { src: string; alt: string }
  reversePosition?: boolean
}

export default function Features({
  text,
  title,
  image,
  reversePosition,
}: Props) {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32 w-screen">
      <div className={`mx-auto max-w-7xl px-6 lg:px-8`}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div
            className={`lg:pr-8 lg:pt-4 ${
              reversePosition ? "lg:order-last" : "lg:order-none"
            }`}
          >
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                {title}
              </h2>
              {text}
            </div>
          </div>
          <div className="relative">
            <Image
              fill
              objectFit="cover"
              src={image.src}
              alt={image.alt}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
