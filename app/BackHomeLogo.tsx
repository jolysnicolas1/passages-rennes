import Image from "next/image"
import logo from "../public/logo_passages_vert.png"


export default function BackHomeLogo() {
    return (
        <div className="
        flex ">
            <a href="/" className="-m-1.5 p-1.5">

                <span className="sr-only">Passages</span>
                <Image 
                    src={logo}
                    alt="logo passages"
                    width={32}
                    height={32}
                />
            </a>
        </div>
    )
}