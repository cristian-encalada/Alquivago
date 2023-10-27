'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useState } from "react"

useRouter
export default function CurrencyButton() {
  const [visible, setVisible] = useState('hidden')
  const router = useRouter()
  const pathName = usePathname()

  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  return (
    <div className="flex flex-col gap-1 w-1/6">
    <button className=" font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition" onClick={handleVisibility}>Moneda</button>
    <ul className={` ${visible} gap-1 bg-white py-2 px-1 rounded-md shadow-xl justify-around`}>
  <li className="">
    <input
      type="radio"
      name="moneda"
      value="USD"
      onClick={() => router.push(`/publish/moneda=USD`)}
    />
    USD
  </li>
  <li>
    <input
      type="radio"
      name="moneda"
      value="UYU"
      onClick={() => router.push('/publish/moneda=UYU')}
    />
    UYU
  </li>
</ul>

  </div>
  )
}