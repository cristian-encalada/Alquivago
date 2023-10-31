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
  function formatearArrayComoString(array) {
    const agrupado = {};
  
    for (const item of array) {
      const [clave, valor] = item.split('=');
      if (!agrupado[clave]) {
        agrupado[clave] = [valor];
      } else {
        agrupado[clave].push(valor);
      }
    }
  
    const resultado = Object.entries(agrupado)
      .map(([clave, valores]) => `${clave}=${valores.join(',')}`)
      .join('&');
  
    return resultado;
  }
  function handleFilters() {
    const routeParsed = formatearArrayComoString(filters)
    return router.push(`/publish/${routeParsed}`)
  }

  function removeFilters() {
    setFilters([])
    return router.push('/publish')
  }
  return (
    <>
    <CurrencyButton filters={filters} setFilters={setFilters}/>
    <TypeButton filters={filters} setFilters={setFilters} />
    <Bedroombutton filters={filters} setFilters={setFilters} />
    <Bathbutton  filters={filters} setFilters={setFilters}/>
    <button className="h-1/6 border-2 py-2 px-2 rounded-lg text-white text-lg font-medium bg-azul-500 hover:scale-110 transition" onClick={handleFilters}>Aplicar filtros</button>
    <button className="border-2 py-2 px-2 rounded-lg text-lg font-medium bg-red-500 hover:scale-110 transition text-red-100" onClick={() => router.push('/publish')}>Eliminar filtros</button>
    </>
  )
}