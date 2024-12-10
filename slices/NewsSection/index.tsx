import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { JSX } from "react"

import NewsInnerCard from "@/components/NewsInnerCard"
import { WobbleCard } from "@/components/ui/wobble-card"
import { bgColors } from "@/lib/utils"

/**
 * Props for `NewsSection`.
 */
export type NewsSectionProps = SliceComponentProps<Content.NewsSectionSlice>

/**
 * Component for "NewsSection" Slices.
 */
const NewsSection = ({ slice }: NewsSectionProps): JSX.Element => {
  const notExpiredNews = slice.primary.body.filter(item =>
    item.expiration_date ? new Date(item.expiration_date) > new Date() : false
  )
  return (
    <>
      {notExpiredNews.length > 0 && (
        <section
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="py-16"
        >
          <div className="mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {slice.primary.title}
            </h2>
            <div className="flex justify-center items-center">
              <div className="flex flex-wrap gap-8">
                {notExpiredNews.map((item, index) => (
                  <WobbleCard
                    key={item.title}
                    containerClassName={`${
                      bgColors[index % notExpiredNews.length]
                    } col-span-1  max-w-sm`}
                  >
                    <NewsInnerCard
                      title={item.title}
                      content={item.content}
                      imageUrl={item.image.url}
                    />
                  </WobbleCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default NewsSection
