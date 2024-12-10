import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { JSX } from "react"

import Slider from "@/components/Slider"

/**
 * Props for `Carrousel`.
 */
export type CarrouselProps = SliceComponentProps<Content.CarrouselSlice>

/**
 * Component for "Carrousel" Slices.
 */
const Carrousel = ({ slice }: CarrouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Slider
        title={slice.primary.title}
        images={slice.primary.images}
      />
    </section>
  )
}

export default Carrousel
