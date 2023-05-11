import Burger from "./Burger"

const Navbar = () => {
  const navigation = [
    { name: "Nos offres", href: "/nos-offres" },
    { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { name: "Portfolio", href: "/portfolio" },
  ]

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-white lg:bg-transparent">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Passages</span>
            <img
              className="h-8 w-auto"
              src="logo_passages_vert.png"
              alt="logo passages"
            />
          </a>
        </div>
        <Burger />
        <div className="hidden rounded-full bg-white px-5 py-3 shadow lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-lime-950"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="text-sm font-semibold leading-6 text-lime-950">
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
