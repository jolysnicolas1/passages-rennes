import { BellAlertIcon } from "@heroicons/react/24/outline"
import { Map, PhoneCall } from "lucide-react"
import React from "react"

const BottomButtons = () => {
  const buttons = [
    {
      name: "Itinéraire",
      href: "https://www.google.com/maps/place/La+Cantine+des+Ateliers+du+Vent/@48.1031181,-1.6967294,15z/data=!4m2!3m1!1s0x0:0x2f5a648e9c59587e?sa=X&ved=2ahUKEwjDpYvH2_eAAxVsXaQEHXLEDJoQ_BJ6BAhBEAA&ved=2ahUKEwjDpYvH2_eAAxVsXaQEHXLEDJoQ_BJ6BAhTEAg",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => <Map {...props} />,
    },
    {
      name: "Appeler",
      href: "tel:0651961494",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => <PhoneCall {...props} />,
    },
    {
      name: "Réserver",
      href: "#laTable",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => <BellAlertIcon {...props} />,
    },
  ]

  return (
    <div className={`fixed md:hidden -bottom-3 z-50  bg-transparent`}>
      <div
        className="static flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div
          className={`font-sans px-5 pt-4 pb-3 flex
            bg-white sm:justify-between sm:w-[75vw] rounded-full text-black border border-gray-200 shadow
            `}
        >
          {buttons.map(item => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center"
            >
              <item.icon
                className="h-5 w-5"
                aria-hidden="true"
              />
              <a
                href={item.href}
                className="mt-2 text-sm font-medium leading-6 px-6"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomButtons
