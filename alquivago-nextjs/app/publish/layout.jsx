'use client'
import ApplyFilters from "../components/ApplyFilters"
export default function PublishLayout({ children, params }) {
  return (
    <>
    <section className="hidden md:flex justify-center items-start gap-5 bg-slate-100">
      <ApplyFilters />
    </section>
    {children}
    </>
  )
} 