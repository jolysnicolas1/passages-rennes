import Burger from "./Burger"
import BackHomeLogo from "./BackHomeLogo"
import ContactTab from "./ContactTab"
import Menu from "./Menu"

const Navbar = () => {


  return (
    <header className="sticky inset-x-0 top-0">
      <nav aria-label="Global" className="
      flex 
      justify-between 
      p-6 
      z-10
      lg:px-8 ">

        <BackHomeLogo></BackHomeLogo>
        {/* <Burger /> */}
        <Menu />
        <ContactTab />

      </nav>
    </header>
  )
}

export default Navbar
