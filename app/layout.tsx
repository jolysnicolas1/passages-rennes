import "./globals.css"

import localFont from "next/font/local"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const gillSans = localFont({
  src: [
    // pas de thin ni de extralight
    {
      path: "./fonts/GillSansMTPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/GillSansMTPro-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GillSansMTPro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    // bold correspond a semibold et heavy a bold en tailwind
    {
      path: "./fonts/GillSansMTPro-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/GillSansMTPro-Heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-HeavyItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/GillSansMTPro-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/GillSansMTPro-UltraBold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gill-sans",
})

const bluuNext = localFont({
  src: [
    {
      path: "./fonts/bluunext-bolditalic-webfont.woff2",
      weight: "normal",
      style: "italic",
    },
    {
      path: "./fonts/bluunext-bold-webfont.woff2",
      weight: "bold",
      style: "normal",
    },
    { path: "./fonts/bluunext-titling.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-bluu-next",
})

const title = "Passages, gastronomie itinérante et sur-mesure"
const desc =
  "Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées."
const image = "https://passages-rennes.com/cooks.jpg"

export const metadata = {
  verification: {
    google: "dagFnwii5HfTcKs0SHDaT9-kwRimu2BRU3pG-paI9QY",
  },
  title: title,
  description: desc,
  openGraph: {
    images: image,
    type: "website",
    title: title,
    description:
      "Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.",
    url: "https://passages-rennes.com",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: desc,
    images: [image],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`rounded-xl overflow-x-hidden font-sans min-h-screen ${gillSans.variable} ${bluuNext.variable}`}
      >
        <Navbar isDark />
        {children}
        <Footer />
      </body>
    </html>
  )
}
