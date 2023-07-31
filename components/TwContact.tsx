"use client"

import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaRegEnvelope } from "react-icons/fa"

import contactPicture from "../public/contact.jpg"
import ContactBg from "./ContactBg"

export default function TwContact() {
  return (
    <div className="relative bg-transparent min-h-screen">
      <ContactBg></ContactBg>
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src={contactPicture}
          width={1200}
          height={1200}
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Travaillons ensemble !
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Un devis, une demande, un événement ? Contactez-nous
            </p>
            <form
              action="#"
              method="POST"
              className="mt-16"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
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
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <Link href="tel:+33651961494">
                      <div className="flex space-x-3 items-center">
                        <div className="relative py-1 text-md font-semibold ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </div>
                        <div className="relative text-md font-normal">
                          <p>06.51.96.14.94</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5">
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
