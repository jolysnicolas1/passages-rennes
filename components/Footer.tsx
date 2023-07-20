import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    { name: "Notre cuisine", href: "#" },
    { name: "Qui sommes nous ?", href: "#" },
    { name: "Nos plats", href: "#" },
  ]

  return (
    <div className="bg-white flex flex-col lg:flex-row justify-center align-center space-x-4 lg:space-x-24 p-8 drop-shadow border-slate-200 border-t">

            <div className="hidden flex space-x-3 items-center">
              <div className="relative py-1 text-md font-semibold ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              </div>
              <div className="relative text-md font-normal ">
                <p>06.51.96.14.94</p>
              </div>
            </div>

            <Link href="tel:+33651961494">
              <div className="flex space-x-3 items-center">
                <div className="relative py-1 text-md font-semibold ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                </div>
                <div className="relative text-md font-normal">
                  <p>06.51.96.14.94</p>
                </div>
              </div>
            </Link>

            <Link href="mailto:passages.rennes@gmail.com">
              <div className="flex space-x-3 items-center">
                <div className="relative py-1 text-md font-semibold ">
                  <FaRegEnvelope />
                </div>
                <div className="relative text-md font-semibold ">
                  <p>passages.rennes@gmail.com</p>
                </div>
              </div>
            </Link>


            <Link href="https://instagram.com/passages.bzh?igshid=ZDdkNTZiNTM=">
              <div className="flex space-x-3  items-center">
                <div className="relative py-1 text-md font-semibold ">
                  <FaInstagram />
                </div>
                <div className="relative text-md font-normal   duration-300 hover:">
                  <p>passages.bzh</p>
                </div>
              </div>
            </Link>
    </div>
  )
}

export default Footer
