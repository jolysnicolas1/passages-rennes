import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import localFont from 'next/font/local'

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


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Passages',
  description: 'Propose des catring sur Rennes et sa région',
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
