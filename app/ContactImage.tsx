import Image from "next/image"
import contactPicture from '../public/contact.webp'


export default function ContactImage() {
    return (
        <div className="relative 
            lg:col-span-5 
            lg:-mr-8 
            xl:absolute 
            xl:inset-0 
            xl:left-1/2 
            xl:mr-0
            drop-shadow-xl
        ">
            <Image
            className="
            aspect-[3/2] 
            w-full 
            object-cover 
            lg:absolute 
            lg:inset-0 
            lg:aspect-auto 
            lg:h-full
            opacity-50
            "
            src={contactPicture}
            width={1280}
            height={1280}
            alt="image"
            />
        </div>
    )
}