'use client'
import { useRouter } from "next/navigation"
import CurrencyButton from "../components/CurrencyButton"
import TypeButton from "../components/TypeButton"
export default function PublishLayout({ children }) {
  const router = useRouter()
  return (
    <>
    <section className="flex justify-center items-start gap-5">
      <CurrencyButton/>
      <TypeButton />
    </section>
    {children}
    </>
  )
}