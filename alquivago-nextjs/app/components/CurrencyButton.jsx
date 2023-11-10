'use client'
import { flightRouterStateSchema } from "next/dist/server/app-render/types"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

useRouter
export default function CurrencyButton({ filters, setFilters }) {
  const [visible, setVisible] = useState('invisible')
  const router = useRouter()
  const pathName = usePathname()

 /* function handleVisibility() {
    if (visible === 'invisible') {
      setVisible('visible')
    } else setVisible('invisible')
  } */
  const handleClick = (e) => {
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }
  return (
    <div className="flex flex-col gap-1 w-1/6 h-20" onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('invisible')}>
      <button className="font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition">Moneda</button>
      <ul className={`${visible} gap-1 bg-white py-2 px-1 rounded-md shadow-xl justify-around flex`}>
        <li>
          <input
            type="radio"
            name="moneda"
            value="moneda=USD"
            onChange={handleClick}
            checked={filters.includes('moneda=USD')}
          />
          USD
        </li>
        <li>
          <input
            type="radio"
            name="moneda"
            value="moneda=UYU"
            onChange={handleClick}
            checked={filters.includes('moneda=UYU')}
          />
          UYU
        </li>
      </ul>
    </div>
  )
}