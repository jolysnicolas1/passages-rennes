import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import { JSX } from "react"

import Logo from "@/components/Logo"

/**
 * Props for `LogoSection`.
 */
export type LogoSectionProps = SliceComponentProps<Content.LogoSectionSlice>

/**
 * Component for "LogoSection" Slices.
 */
const LogoSection = ({ slice }: LogoSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Logo
        title={slice.primary.title}
        images={slice.primary.images}
      />
    </section>
  )
}

export default LogoSection
