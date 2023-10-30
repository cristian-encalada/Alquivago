'use client'
import { useState } from "react";
import Bathbutton from "./BathFilter";
import Bedroombutton from "./BedroomFilter";
import CurrencyButton from "./CurrencyButton";
import TypeButton from "./TypeButton";
import { useRouter } from "next/navigation";

export default function ApplyFilters() {
  const router = useRouter()
  const [filters, setFilters] = useState([])
  function handleFilters() {
    return router.push(`/publish/${filters.join('&')}`)
  }
  return (
    <>
    <CurrencyButton filters={filters} setFilters={setFilters}/>
    <TypeButton filters={filters} setFilters={setFilters} />
    <Bedroombutton filters={filters} setFilters={setFilters} />
    <Bathbutton  filters={filters} setFilters={setFilters}/>
    <button className="border-2 py-2 px-2 rounded-lg text-white text-lg font-medium bg-cyan-500 hover:scale-110 transition" onClick={handleFilters}>Aplicar filtros</button>
    <button className="border-2 py-2 px-2 rounded-lg text-white text-lg font-medium bg-red-500 hover:scale-110 transition" onClick={() => router.push('/publish')}>Eliminar filtros</button>
    </>
  )
}