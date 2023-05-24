import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import contactPicture from '../public/contact.jpg'



export default function Contact() {
  return (
    <div className="relative bg-white mb-auto">
      <div className="mx-auto mb-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight  sm:mt-10 sm:text-6xl">
              Nous contacter
            </h1>
            <div className="mt-8 flex space-x-3">
              <div className="relative py-1 text-xl font-semibold text-red-950">
                <FaRegEnvelope />
              </div>
              <div className="relative text-xl font-semibold text-red-950">
                <p>passages.rennes@gmail.com</p>
              </div>
            </div>
            <div className="mt-8 flex space-x-3">
              <div className="relative py-1 text-xl font-semibold text-red-950">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              </div>
              <div className="relative text-xl font-normal text-red-950">
                <p>06.51.96.14.94</p>
              </div>
            </div>
            <Link href="https://instagram.com/passages.bzh?igshid=ZDdkNTZiNTM=">
              <div className="mt-8 flex space-x-3">
                <div className="relative py-1 text-xl font-semibold">
                  <FaInstagram />
                </div>
                <div className="relative text-xl font-normal text-red-950  duration-300 hover:text-lime-950">
                  <p>passages.bzh</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={contactPicture}
            width={1200}
            height={1200}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}