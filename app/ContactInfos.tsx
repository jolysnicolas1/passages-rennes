import ContactTitle from "./ContactTitle"
import ContactEmail from "./ContactEmail"
import ContactInstagram from "./ContactInstagram"
import ContactPhone from "./ContactPhone"

export default function ContactInfos() {
    return (
        <div className="
            bg-slate-50
            flex
            flex-col
            rounded-xl
            drop-shadow-xl
            w-fit
            absolute
            p-12
            ">

            <ContactTitle></ContactTitle>
            <ContactEmail></ContactEmail>
            <ContactPhone 
                textSize=""
                />
            <ContactInstagram></ContactInstagram>
        </div>
    )
}