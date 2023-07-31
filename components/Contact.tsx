"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaRegEnvelope } from "react-icons/fa"

import logo from "/public/logo_passages_vert.png"

import contactPicture from "../public/contact.jpg"
import ContactBg from "./ContactBg"

export default function Contact() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  return (
    <div className="relative mb-auto text-gray-700 min-h-screen">
      <ContactBg></ContactBg>
      <div className="mx-auto mb-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6 relative lg:h-screen">
          <motion.div
            style={{ y }}
            className="mx-auto max-w-2xl lg:mx-0 bg-gray-100 drop-shadow-md py-5 px-8 absolute -right-20 z-40 opacity-95"
          >
            <div className="flex space-x-5 text-right">
              <Image
                className="h-8 w-auto"
                src={logo}
                width={120}
                height={120}
                alt=""
              />
              <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
                Passages{" "}
                <strong className="passage font-extralight">
                  gastronomie itinérante et sur-mesure
                </strong>
              </h1>
            </div>
            <div className=" flex flex-col text-center">
              <Link href="mailto:passages.rennes@gmail.com">
                <div className="mt-8 flex space-x-3">
                  <div className="relative py-1 text-xl font-semibold ">
                    <FaRegEnvelope />
                  </div>
                  <div className="relative text-xl font-semibold ">
                    <p>passages.rennes@gmail.com</p>
                  </div>
                </div>
              </Link>

              <Link href="tel:+33651961494">
                <div className="mt-8 flex space-x-3">
                  <div className="relative py-1 text-xl font-semibold ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div className="relative text-xl font-normal ">
                    <p>06.51.96.14.94</p>
                  </div>
                </div>
              </Link>

              <Link href="https://instagram.com/passages.bzh?igshid=ZDdkNTZiNTM=">
                <div className="mt-8 flex space-x-3">
                  <div className="relative py-1 text-xl font-semibold">
                    <FaInstagram />
                  </div>
                  <div className="relative text-xl font-normal   duration-300 hover:text-lime-950">
                    <p>passages.bzh</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
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
