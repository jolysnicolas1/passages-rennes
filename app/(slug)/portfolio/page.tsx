import OrderHistory from "../../../components/OrderHistory"

export const metadata = {
  title: "Passages | Portfolio",
  description:
    "Notre équipe de passionnés, basée sur Rennes, vous accompagne dans l’élaboration de vos évènements en proposant des solutions de restauration personnalisées.",
}

export default function Home() {
  return (
    <main className="">
      <OrderHistory />
    </main>
  )
}
