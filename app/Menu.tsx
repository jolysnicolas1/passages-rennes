export default function Menu() {
    
const navigation = [
    { name: "Nos offres", href: "/nos-offres" },
    { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
    { name: "Portfolio", href: "/portfolio" },
  ]
    return (
        <div className="
          hidden 
          rounded-full 
          px-5 
          py-3 
          shadow 
          lg:flex 
          space-x-12
          bg-white
            ">
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
    )
}