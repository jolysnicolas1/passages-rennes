import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import localFont from 'next/font/local'
import Head from 'next/head'

const myFont = localFont({
  src: [
    // pas de thin ni de extralight
    {
      path: '../public/fonts/GillSans/GillSansMTPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    // bold correspond a semibold et heavy a bold en tailwind
    {
      path: '../public/fonts/GillSans/GillSansMTPro-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-BoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-Heavy.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-HeavyItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/GillSans/GillSansMTPro-UltraBold.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
})

const title = 'Passages, gastronomie itinérante et sur-mesure'
const desc = 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.'
const image = "https://passages-rennes.com/cooks.jpg"

export const metadata = {
  verification: {
    google: "dagFnwii5HfTcKs0SHDaT9-kwRimu2BRU3pG-paI9QY"
  },
  title: title,
  description: desc,
  openGraph: {
    images: image,
    type: "website",
    title: title,
    description: 'Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.',
    url: "https://passages-rennes.com",
  },
  twitter: {
    card: 'summary_large_image',
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
      <body className={`rounded-xl min-h-screen ${myFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
