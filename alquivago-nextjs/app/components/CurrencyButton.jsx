'use client'
import { flightRouterStateSchema } from "next/dist/server/app-render/types"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

useRouter
export default function CurrencyButton({ filters, setFilters }) {
  const [visible, setVisible] = useState('hidden')
  const router = useRouter()
  const pathName = usePathname()

  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  const handleClick = (e) => {
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }
  return (
    <div className="flex flex-col gap-1 w-1/6">
      <button className="font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition" onClick={handleVisibility}>Moneda</button>
      <ul className={` ${visible} gap-1 bg-white py-2 px-1 rounded-md shadow-xl justify-around`}>
        <li>
          <input
            type="radio"
            name="moneda"
            value="moneda=USD"
            onClick={handleClick}
          />
          USD
        </li>
        <li>
          <input
            type="radio"
            name="moneda"
            value="moneda=UYU"
            onClick={handleClick}
          />
          UYU
        </li>
      </ul>
    </div>
  )
}