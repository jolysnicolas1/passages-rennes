import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function ContactInstagram() {
    return (
        <Link href="https://instagram.com/passages.bzh?igshid=ZDdkNTZiNTM=">
            <div className="
                flex 
                ">

                <FaInstagram /> <p>passages.bzh</p>

            </div>
        </Link> 
    )
}