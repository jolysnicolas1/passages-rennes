"use client"

import { HeartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import { socials } from "@/lib/socials"
import { navigation as mainNavigation } from "@/lib/utils"

const Footer = () => {
  const navigation = {
    main: mainNavigation,
    social: socials,
  }

  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className=" -mb-6 columns-2 flex justify-center  flex-wrap"
          aria-label="Footer"
        >
          {navigation.main.map(item => (
            <div
              key={item.name}
              className="pb-6 px-6"
            >
              <Link
                href={item.href}
                className="text-base leading-6 text-slate-50 hover:underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-50 hover:underline"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center flex flex-wrap justify-center text-sm leading-5 text-slate-50">
          Le restaurant Passages est hebergé aux{" "}
          <Link
            className="ml-1 hover:underline"
            href="https://www.lesateliersduvent.org/"
          >
            Ateliers du vent
          </Link>
        </p>
        <p className="mt-2 text-center flex-wrap flex justify-center text-sm leading-5 text-slate-50">
          Le site a été construit avec{" "}
          <span>
            <HeartIcon className="mx-1 h-4 w-4 text-slate-50" />
          </span>{" "}
          par{" "}
          <Link
            className="ml-1 hover:underline"
            href="https://lasercats.fr"
          >
            lasercats
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
