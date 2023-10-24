'use client'
import { useRouter } from "next/navigation"
import CurrencyButton from "../components/CurrencyButton"
export default function PublishLayout({ children }) {
  const router = useRouter()
  return (
    <>
    <section className="flex justify-center">
      <CurrencyButton/>
    </section>
    {children}
    </>
  )
}