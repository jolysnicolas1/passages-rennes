import Image from "next/image"
import cooks from "/public/cooks.webp"


export default function CooksPicture() {
    return (
        
        <div className="
        w-2/4
        relative 
        overflow-hidden 
        rounded-lg
        h-96 
          ">

          <div className="absolute inset-0">
            <Image
                className="object-contain object-start"
                src={cooks}
                alt="Picture of the author"
                width={900}
                height={900}
            />
          </div>
        </div>
    )
}