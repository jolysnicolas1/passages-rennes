import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'

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
      <body className={`
        ${inter.className}
        min-h-screen
        flex
        flex-col
        justify-between
        `}>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}