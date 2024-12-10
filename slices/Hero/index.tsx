import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { JSX } from "react"

import HeroContent from "@/components/HeroContent"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroContent image={slice.primary.image} />
    </section>
  )
}

export default Hero
