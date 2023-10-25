'use client'
import { useRouter } from "next/navigation"
import CurrencyButton from "../components/CurrencyButton"
import TypeButton from "../components/TypeButton"
import Bathbutton from "../components/BathFilter"
import BedroomButton from "../components/BedroomFilter"
export default function PublishLayout({ children }) {
  const router = useRouter()
  return (
    <>
    <section className="flex justify-center items-start gap-5">
      <CurrencyButton />
      <TypeButton />
      <Bathbutton />
      <BedroomButton/>
    </section>
    {children}
    </>
  )
}