"use client"

import { Dialog } from "@headlessui/react"
import {
  Bars3Icon,
  BellAlertIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"

import { navigation, reservationLink } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

type Props = {
  isDark?: boolean
}

const Burger = ({ isDark }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex md:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center  p-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon
          className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900"}`}
          aria-hidden="true"
        />
      </button>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5  p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block  py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={reservationLink}
                  className={
                    buttonVariants({ variant: "outline", size: "lg" }) +
                    " plausible-event-name=resa+mobile+menu"
                  }
                >
                  <BellAlertIcon className="mr-2 h-4 w-4" /> Réserver une table
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default Burger
