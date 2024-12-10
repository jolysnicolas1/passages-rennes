import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import Link from "next/link"
import { JSX } from "react"

import IconFromPrismic from "@/components/IconFromPrismic"
import Offers from "@/components/Offers"
import { buttonVariants } from "@/components/ui/button"

/**
 * Props for `Offre`.
 */
export type OffreProps = SliceComponentProps<Content.OffreSlice>

/**
 * Component for "Offre" Slices.
 */
const Offre = ({ slice }: OffreProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-lime-950"
    >
      <Offers
        reversePosition={slice.primary.reverse_position}
        titleId={slice.primary.title_id as string}
        link={
          <Link
            href={slice.primary.button_link as string}
            className={
              buttonVariants({ variant: "outline", size: "lg" }) +
              " plausible-event-name=resa+desktop+table"
            }
          >
            <IconFromPrismic
              icon={slice.primary.button_icon}
              className="mr-2 h-4 w-4"
            />{" "}
            {slice.primary.button_text}
          </Link>
        }
        title={slice.primary.title}
        features={slice.primary.detail}
        images={[
          {
            href: slice.primary.image1.url,
            alt: slice.primary.title + " - image 1",
            id: slice.primary.image1.id,
          },
          {
            href: slice.primary.image2.url,
            alt: slice.primary.title + " - image 2",
            id: slice.primary.image2.id,
          },
          {
            href: slice.primary.image3.url,
            alt: slice.primary.title + " - image 3",
            id: slice.primary.image3.id,
          },
          {
            href: slice.primary.image4.url,
            alt: slice.primary.title + " - image 4",
            id: slice.primary.image4.id,
          },
        ]}
      />
    </section>
  )
}

export default Offre
