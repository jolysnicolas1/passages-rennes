import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import ContactPhone from "./ContactPhone";
import ContactEmail from "./ContactEmail";
import ContactInstagram from "./ContactInstagram";

const Footer = () => {
  const navigation = [
    { name: "Notre cuisine", href: "#" },
    { name: "Qui sommes nous ?", href: "#" },
    { name: "Nos plats", href: "#" },
  ]

  return (
    <div className="
      flex 
      flex-row 
      max-h-2
      justify-center 
      align-center 
      space-x-4 
      space-x-24 
      border-slate-200 
      border-t
      bg-pink-300
      ">

      <ContactPhone textSize="md"/>
      <ContactEmail />
      <ContactInstagram></ContactInstagram>
    </div>
  )
}

export default Footer
