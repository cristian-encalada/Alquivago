'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"

useRouter
export default function CurrencyButton() {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div className="flex flex-col gap-1">
    <button className="border-2 font-medium text-lg bg-white rounded-md shadow">Moneda</button>
    <ul className="flex gap-1 border-2 bg-white py-2 px-1 rounded-md shadow-xl">
  <li>
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