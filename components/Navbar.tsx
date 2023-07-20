import { type } from "os"
import Burger from "./Burger"
import logo from '/public/logo_passages_vert.png'
import Image from "next/image"

type Props = {
  isDark?: boolean
}

const Navbar = ({isDark}: Props) => {
  const navigation = [
    { name: "Nos offres", href: "/nos-offres" },
    { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { name: "Portfolio", href: "/portfolio" },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white lg:bg-transparent">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Passages</span>
            <Image
                className="h-8 w-auto"
                src={logo}
                width={120}
                height={120}
                alt=""
              />
          </a>
        </div>
        <Burger />
        <div className={`hidden font-sans px-5 pt-4 pb-3 shadow md:flex md:gap-x-12 ${isDark ? ' bg-transparent text-white' : 'bg-white rounded-full'}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-medium leading-6 "
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a href="/contact" className="text-sm font-semibold leading-6 ">
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
