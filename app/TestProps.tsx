import portfolio1 from "/public/portfolio01.jpg"
import Image from "next/image"


export default function TestProps(props) {
    return (
        <div className="h-24 w-24 bg-green-100">
            {props.title}
            <p>source={props.testItem}</p>
            <p>index={props.testIndex}</p>
            <div className="bg-black shrink-0 snap-always snap-center ...">
            <Image
                className="object-contain object-start"
                src={props.testItem}
                alt="Picture of the author"
                width={600}
                height={600}
            />
        </div>
            
        </div>  
    )
}