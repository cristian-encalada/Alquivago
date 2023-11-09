'use client'
import { useState } from "react";
import Bathbutton from "./BathFilter";
import Bedroombutton from "./BedroomFilter";
import CurrencyButton from "./CurrencyButton";
import TypeButton from "./TypeButton";
import { useRouter } from "next/navigation";
import ZoneBar from "./ZoneBar";

export default function ApplyFilters() {
  const router = useRouter()
  const [filters, setFilters] = useState([])

  function formatingArray(array) {
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
    const routeParsed = formatingArray(filters)
    return router.push(`/publish/${routeParsed}`)
  }

  function removeFilters() {
    setFilters([])
    return router.push('/publish')
  }
  return (
    <>
     <ZoneBar filters={filters} setFilters={setFilters} formatingArray={formatingArray} handleFilters={handleFilters}/>
    <div className="flex justify-center items-start gap-2">
    <CurrencyButton filters={filters} setFilters={setFilters}/>
    <TypeButton filters={filters} setFilters={setFilters} />
    <Bedroombutton filters={filters} setFilters={setFilters} />
    <Bathbutton  filters={filters} setFilters={setFilters}/>
    <button className="mt-0 py-2 px-2 rounded-lg text-white text-lg font-medium bg-azul-500 hover:scale-110 transition" onClick={handleFilters}>Aplicar filtros</button>
    <button className="py-2 px-2 rounded-lg text-white text-lg font-medium bg-red-500 hover:scale-110 transition" onClick={removeFilters}>Eliminar filtros</button>
    </div>
    </>
  )
}