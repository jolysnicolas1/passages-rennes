import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import { JSX } from "react"

import Features from "@/components/Features"
import IconFromPrismic from "@/components/IconFromPrismic"

/**
 * Props for `OnePhotoSection`.
 */
export type OnePhotoSectionProps =
  SliceComponentProps<Content.OnePhotoSectionSlice>

/**
 * Component for "OnePhotoSection" Slices.
 */
const OnePhotoSection = ({ slice }: OnePhotoSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Features
        reversePosition={slice.primary.reverse_position}
        titleId={slice.primary.title_id as string}
        image={{
          src: slice.primary.image.url,
          alt: slice.primary.title as string,
        }}
        title={slice.primary.title}
        text={slice.primary.content}
        iconsAndTexts={
          <>
            <div className="space-y-6 pt-6">
              {slice.primary.icon_and_text.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-x-6"
                >
                  <IconFromPrismic
                    icon={item.icon}
                    className="h-6 w-6 mr-2"
                  />
                  <PrismicRichText field={item.text} />
                </div>
              ))}
            </div>
          </>
        }
      />
    </section>
  )
}

export default OnePhotoSection
