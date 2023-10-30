'use client'
import { useRouter } from "next/navigation"
import ApplyFilters from "../components/ApplyFilters"
export default function PublishLayout({ children, params }) {
  const router = useRouter()
  return (
    <>
    <section className="hidden md:flex justify-center items-start gap-5 bg-slate-100">
      <ApplyFilters />
    </section>
    {children}
    </>
  )
}