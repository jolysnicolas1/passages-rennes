import CooksPicture from "./CooksPicture"
import CooksContent from "./CooksContent"

  export default function Cooks() {
    return (
      <section
      aria-labelledby="presentation"
      className="
      flex
        ">
          
        <CooksContent />
        <CooksPicture />

      </section>
    )
  }