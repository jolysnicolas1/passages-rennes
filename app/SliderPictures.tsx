import Image from "next/image"
import portfolio01 from "/public/portfolio01.jpg"
import portfolio02 from "/public/portfolio02.jpg"
import portfolio03 from "/public/portfolio03.jpg"


export default function SliderPictures(props) {
    console.log(props)
    return (
        <div className="bg-black shrink-0 snap-always snap-center ...">
            <Image
                className="object-contain object-start"
                src={props.src}
                alt="alt"
                width={600}
                height={600}
            />
        </div>
    )
}