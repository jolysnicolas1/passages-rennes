import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import Link from "next/link"
import { JSX } from "react"

import { Banner as BannerComponent } from "@/components/Banner"
import IconFromPrismic from "@/components/IconFromPrismic"
import { buttonVariants } from "@/components/ui/button"
/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BannerComponent
        punchline={slice.primary.punchline}
        button={
          <Link
            href={slice.primary.button_link as string}
            className={buttonVariants({ variant: "outline", size: "xl" })}
          >
            <IconFromPrismic
              icon={slice.primary.button_icon}
              className="mr-2 h-4 w-4"
            />{" "}
            {slice.primary.button_text}
          </Link>
        }
      />
    </section>
  )
}

export default Banner
