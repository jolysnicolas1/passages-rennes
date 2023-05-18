export default function ContactButton() {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <a  href="/contact"
                className="
                rounded-md 
                bg-red-600 
                px-4 py-3 
                text-md 
                font-semibold 
                text-white 
                shadow-sm 
                hover:bg-red-500 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-red-600 
                 ">
                Nous contacter
            </a>
        </div>
    )
}